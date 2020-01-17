import re

from django import template
from django.db.models import Field
from django.utils import formats
from django.core.exceptions import FieldDoesNotExist

from rijkshuisstijl.templatetags.rijkshuisstijl import register
from rijkshuisstijl.templatetags.rijkshuisstijl_helpers import get_recursed_field_value


class CaptureNode(template.Node):
    def __init__(self, nodelist, var_name):
        self.nodelist = nodelist
        self.var_name = var_name

    def render(self, context):
        output = self.nodelist.render(context)
        context[self.var_name] = output
        return ""


@register.filter
def format_value(obj, field):
    """
    Formats field in obj, supporting get_<column_key>_display() and and date_format().
    :param obj: (Model) Object containing key column_key.
    :param field key of field to get label for.
    :return: Formatted string.
    """

    # Check for rh_display_<column> on object.
    datagrid_display = "rh_display_{}".format(field)
    if hasattr(obj, datagrid_display):
        return getattr(obj, datagrid_display)

    # Check for get_<column>_display on object.
    model_display = "get_{}_display".format(field)
    if hasattr(obj, model_display):
        display = getattr(obj, model_display)
        if callable(display):
            return display()

    # Check for __str__.
    if field is "__str__":
        return str(obj)

    # Check for list.
    if type(obj) is list:
        return obj.get(field)

    # Check for (related) value.
    val = get_recursed_field_value(obj, field)

    try:
        model_field = obj._meta.get_field(field)

        if not isinstance(model_field, Field):
            # field is a related manager
            model_field = model_field.field
    except FieldDoesNotExist:
        model_field = None

    if field.endswith("_set"):
        possible_related_field = field.replace("_set", "")

        try:
            related_manager = obj._meta.get_field(possible_related_field)
        except FieldDoesNotExist:
            related_manager = None

        if related_manager and any([related_manager.field.many_to_many, related_manager.field.one_to_many]):
            return ", ".join([str(instance) for instance in val.all()])

    if model_field and any([model_field.many_to_many, model_field.one_to_many]):
        # In case the field is a related manager, return a comma seperated
        # string with the string representation of each instance.
        return ", ".join([str(instance) for instance in val.all()])
    elif model_field and model_field.many_to_one:
        return str(val)

    if val:
        try:
            # Try to apply date formatting.
            return formats.date_format(val)
        except AttributeError:
            return val

    # Return empty string
    return ""


@register.tag
def capture(parser, token):
    """
    Captures contents and assigns them to variable.
    Allows capturing templatetags that don't support "as".

    Example:

        {% capture as body %}{% lorem 20 w random %}{% endcapture %}
        {% include 'components/text/text.html' with body=body only %}
    """
    args = token.split_contents()
    if len(args) < 3 or args[-2] != "as":
        raise template.TemplateSyntaxError(
            "'capture' tag requires a variable name after keyword 'as'."
        )
    var_name = args[-1]
    nodelist = parser.parse(("endcapture",))
    parser.delete_first_token()
    return CaptureNode(nodelist, var_name)


class SingleLineNode(template.Node):
    def __init__(self, nodelist):
        self.nodelist = nodelist

    def render(self, context):
        content = self.nodelist.render(context)
        # singleline = content.replace('\n', '')
        return re.sub(r"\s+", " ", content)


@register.tag("singleline")
def singleline(parser, token):
    """
    Puts content on a single line.
    Intended as replacement for {% spaceless %} compressing content within tags.

    Example:

        {% singleline %}

        <input class="input"
               name="foo"
               value="bar">

        {% endsingleline %}
    """
    nodelist = parser.parse(("endsingleline",))
    parser.delete_first_token()
    return SingleLineNode(nodelist)


@register.tag("try")
def tryexcept(parser, token):
    """
    Creates try/except block within a template.

    Example:

        {% try %}
            {% foo %}
        {% except %}
            Something went wrong...
        {% endtry %}
    """
    nodelist_try = parser.parse(("except",))
    parser.next_token()
    nodelist_except = parser.parse(("endtry",))
    parser.delete_first_token()
    return TryNode(nodelist_try, nodelist_except)


class TryNode(template.Node):
    def __init__(self, nodelist_try, nodelist_except):
        self.nodelist_try = nodelist_try
        self.nodelist_except = nodelist_except

    def render(self, context):
        try:
            return self.nodelist_try.render(context)
        except:
            return self.nodelist_except.render(context)
