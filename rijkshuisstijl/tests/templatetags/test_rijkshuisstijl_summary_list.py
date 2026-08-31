from django.forms import ModelForm
from django.template import Context, Template
from django.test import RequestFactory, TestCase

from rijkshuisstijl.tests.factories import BookFactory, PublisherFactory
from rijkshuisstijl.tests.models import Book


class BookForm(ModelForm):
    class Meta:
        model = Book
        fields = ("title",)


class SummaryListFormsetTestCase(TestCase):
    """
    An inline formset built without a prefix falls back to Django's default ("form"), so two
    summary lists on one page read the same POST keys. Because "form-<n>-id" is resolved per
    model, and unrelated models have independent pk sequences, the second list can bind to an
    object the user never saw.
    """

    def setUp(self):
        self.publisher = PublisherFactory()
        self.book = BookFactory(title="Lorem", publisher=self.publisher)
        self.other_book = BookFactory(title="Ipsum", publisher=PublisherFactory())

    def render(self, request, **config):
        config = {
            "object_list": Book.objects.filter(publisher=self.publisher),
            "fields": ("title",),
            "form_class": BookForm,
            **config,
        }
        context = Context({"config": config, "request": request})
        return Template(
            "{% load rijkshuisstijl %}{% summary_list config=config %}"
        ).render(context)

    def post(self, data, **config):
        return self.render(RequestFactory().post("/foo", data), **config)

    def management_form(self, prefix):
        return {
            f"{prefix}-TOTAL_FORMS": "1",
            f"{prefix}-INITIAL_FORMS": "1",
            f"{prefix}-MIN_NUM_FORMS": "0",
            f"{prefix}-MAX_NUM_FORMS": "1000",
        }

    def test_prefix_is_used_in_the_rendered_field_names(self):
        html = self.render(RequestFactory().get("/foo"), prefix="book")

        self.assertIn('name="book-TOTAL_FORMS"', html)
        self.assertNotIn('name="form-TOTAL_FORMS"', html)

    def test_without_a_prefix_the_django_default_is_kept(self):
        html = self.render(RequestFactory().get("/foo"))

        self.assertIn('name="form-TOTAL_FORMS"', html)

    def test_a_post_under_another_prefix_is_ignored(self):
        self.post(
            {
                **self.management_form("author"),
                "author-0-id": str(self.book.pk),
                "author-0-title": "Dolor",
            },
            prefix="book",
        )

        self.book.refresh_from_db()
        self.assertEqual(self.book.title, "Lorem")

    def test_a_post_under_the_own_prefix_is_saved(self):
        self.post(
            {
                **self.management_form("book"),
                "book-0-id": str(self.book.pk),
                "book-0-title": "Dolor",
            },
            prefix="book",
        )

        self.book.refresh_from_db()
        self.assertEqual(self.book.title, "Dolor")

    def test_an_object_outside_the_queryset_is_not_saved(self):
        self.post(
            {
                **self.management_form("book"),
                "book-0-id": str(self.other_book.pk),
                "book-0-title": "Dolor",
            },
            prefix="book",
        )

        self.other_book.refresh_from_db()
        self.assertEqual(self.other_book.title, "Ipsum")
