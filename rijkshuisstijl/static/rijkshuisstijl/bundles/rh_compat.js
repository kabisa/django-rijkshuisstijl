!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static/rijkshuisstijl/bundles/",n(n.s=301)}({301:function(t,e,n){"use strict";n.r(e);n(302),n(303)},302:function(t,e){
/**
 * better-dom: Live extension playground
 * @version 4.0.0 Wed, 04 Jul 2018 18:30:49 GMT
 * @link https://github.com/chemerisuk/better-dom
 * @copyright 2018 Maksim Chemerisuk
 * @license MIT
 */
!function(){"use strict";var t=window,e=document,n=e.documentElement,i=e.ELEMENT_NODE,r=e.DOCUMENT_NODE,o=["Webkit","O","Moz","ms"],a=t.WebKitAnimationEvent?"-webkit-":"",s=Array.prototype,c=s.every,u=s.forEach,l=s.filter,f=s.map,h=(s.slice,Array.isArray),p=Object.keys,d=t.requestAnimationFrame;function g(t){return t.ownerDocument.defaultView.getComputedStyle(t)}function y(t){if(t&&t.nodeType===i)return t.ownerDocument.getElementsByTagName("head")[0].appendChild(t)}function v(t,e,n){void 0===n&&(n="$Element");var i="http://chemerisuk.github.io/better-dom/"+n+".html#"+t,r="invalid call `"+n+("DOM"===n?".":"#")+t+"(";r+=f.call(e,String).join(", ")+")`. ",this.message=r+"Check "+i+" to verify the arguments"}function m(t,e){v.call(this,t,e,"$Document")}function b(t){t&&(this[0]=t,t.__40000__=this)}v.prototype=new TypeError,new TypeError,m.prototype=new TypeError,b.prototype={toString:function(){return""},valueOf:function(){return 0}};var w="@"+a+"keyframes v__40000__ {from {opacity:.99} to {opacity:1}}";function _(t){if(!(this instanceof _))return t?t.__40000__||new _(t):new _;b.call(this,t);var e=t.createElement("style");e.innerHTML=w,y(e),t.__40000__sheet=e.sheet||e.styleSheet}var D=new b;function x(t){if(!(this instanceof x))return t?t.__40000__||new x(t):new x;b.call(this,t)}_.prototype=D,D.valueOf=function(){return this[0]?r:0},D.toString=function(){return"#document"};var k=new b;x.prototype=k,k.valueOf=function(){return this[0]?i:0},k.toString=function(){var t=this[0];return t?"<"+t.tagName.toLowerCase()+">":"#unknown"};var E=new _(t.document),S=t.DOM;E.constructor=function(t){var e=t&&t.nodeType;return e===i?x(t):e===r?_(t):new b},E.noConflict=function(){return t.DOM===E&&(t.DOM=S),E},t.DOM=E;var T=/^<([a-zA-Z-]+)\/?>$/,A=e.createElement("body");function C(t){return function(n){var i=this[0];if(!i||"string"!=typeof n)throw new v("create"+t,arguments);var r,o=t?[]:null,a=!o&&T.exec(n);if(a)return new x(i.createElement(a[1]));for(A.innerHTML=n.trim();r=A.firstElementChild;){if(A.removeChild(r),i!==e&&(r=i.adoptNode(r)),!o){o=new x(r);break}o.push(new x(r))}return o||new x}}_.prototype.create=C(""),_.prototype.createAll=C("All");var M=/^(\w*)(?:#([\w\-]+))?(?:\[([\w\-\=]+)\])?(?:\.([\w\-]+))?$/,N=o.concat(null).map((function(t){return(t?t.toLowerCase()+"M":"m")+"atchesSelector"})).reduceRight((function(t,e){return t||e in n&&e}),null),O=function(t,e){if("string"!=typeof t)return null;var n=M.exec(t);return n&&(n[1]&&(n[1]=n[1].toLowerCase()),n[3]&&(n[3]=n[3].split("=")),n[4]&&(n[4]=" "+n[4]+" ")),function(i){var r,o;for(n||N||(o=(e||i.ownerDocument).querySelectorAll(t));i&&1===i.nodeType;i=i.parentNode){if(n)r=(!n[1]||i.nodeName.toLowerCase()===n[1])&&(!n[2]||i.id===n[2])&&(!n[3]||(n[3][1]?i.getAttribute(n[3][0])===n[3][1]:i.hasAttribute(n[3][0])))&&(!n[4]||(" "+i.className+" ").indexOf(n[4])>=0);else if(N)r=i[N](t);else for(var a=0,s=o.length;a<s;++a){if((s=o[a])===i)return s}if(r||!e||i===e)break}return r&&i}},L=[],j=a?"webkitAnimationStart":"animationstart",I=[a+"animation-name:v__40000__ !important",a+"animation-duration:1ms !important"].join(";");function P(t,e){var n=x(e),i=t.constructor;Object.keys(t).forEach((function(e){var r=t[e];r!==i&&(n[e]=r)})),i&&i.call(n)}function F(t,e){return function(n){if(n&&typeof n!==e)throw new v(t,arguments);var i=this[0],r=O(n),o=i?i.children:[];return"number"==typeof n?(n<0&&(n=o.length+n),x(o[n])):r?l.call(o,r).map(x):f.call(o,x)}}_.prototype.extend=function(e,n){var i=this[0];if(!i)return this;if(1===arguments.length&&"object"==typeof e)return p(e).forEach((function(t){_.prototype[t]=e[t]})),this;if("*"===e)return p(n).forEach((function(t){x.prototype[t]=n[t]})),this;if("function"==typeof n&&(n={constructor:n}),!n||"object"!=typeof n)throw new m("extend",arguments);var r=O(e);L.push([r,n]),i.addEventListener(j,(function(t){var e=t.target;"v__40000__"===t.animationName&&r(e)&&(t.stopPropagation(),e.style.setProperty(a+"animation-name","none","important"),P(n,e))}),!0),u.call(i.querySelectorAll(e),(function(e){e.style.setProperty(a+"animation-name","none","important"),t.setTimeout((function(){P(n,e)}),0)})),this.importStyles(e,I)},_.prototype.mock=function(t){if(!t)return new x;var e=this.create(t);return L.length&&function t(e){L.forEach((function(t){var n=t[0],i=t[1];n(e)&&P(i,e)})),u.call(e.children,t)}(e[0]),e},_.prototype.importScripts=function(){for(var t=this,e=arguments,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=function n(){var r=t[0];if(r){var o,a=i.shift(),s=typeof a;if("string"===s)(o=r.createElement("script")).src=a,o.onload=n,o.async=!0,y(o);else if("function"===s)a();else if(a)throw new m("importScripts",e)}};o()},_.prototype.importStyles=function(t,e){var n=this[0];if(n){if(e||"string"!=typeof t||(e=t,t="@media screen"),"string"!=typeof t||"string"!=typeof e)throw new m("importStyles",arguments);var i=n.__40000__sheet,r=i.cssRules.length;t.split(",").forEach((function(t){try{r=i.insertRule(t+"{"+e+"}",r)}catch(t){}}))}},x.prototype.child=F("child","number"),x.prototype.children=F("children","string");var B=/[\n\t\r]/g,U=function(t){return(" "+t.className+" ").replace(B," ")};x.prototype.hasClass=function(t){if("string"!=typeof t)throw new v("hasClass",arguments);var e=this[0];return!!e&&(e.classList?e.classList.contains(t):U(e).indexOf(" "+t+" ")>=0)},x.prototype.addClass=function(){for(var t=this,e=arguments,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=this[0];return o&&i.forEach((function(n){if("string"!=typeof n)throw new v("addClass",e);o.classList?o.classList.add(n):t.hasClass(n)||(t[0].className+=" "+n)})),this},x.prototype.removeClass=function(){for(var t=arguments,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=this[0];return r&&n.forEach((function(e){if("string"!=typeof e)throw new v("removeClass",t);r.classList?r.classList.remove(e):r.className=U(r).replace(" "+e+" "," ").trim()})),this},x.prototype.toggleClass=function(t,e){if("string"!=typeof t)throw new v("toggleClass",arguments);"boolean"!=typeof e&&(e=!this.hasClass(t));var n=this[0];return n&&(e?this.addClass(t):this.removeClass(t)),e};var z=/\-./g,R={get:{},set:{},find:function(t,e){var n=t.replace(z,(function(t){return t[1].toUpperCase()}));return n in e||(n=o.map((function(t){return t+n[0].toUpperCase()+n.slice(1)})).filter((function(t){return t in e}))[0]),this.get[t]=this.set[t]=n}},Y=["Top","Right","Bottom","Left"],V={font:["fontStyle","fontSize","/","lineHeight","fontFamily"],padding:Y.map((function(t){return"padding"+t})),margin:Y.map((function(t){return"margin"+t})),"border-width":Y.map((function(t){return"border"+t+"Width"})),"border-style":Y.map((function(t){return"border"+t+"Style"}))};R.get.float=R.set.float="cssFloat","fill-opacity font-weight line-height opacity orphans widows z-index zoom".split(" ").forEach((function(t){var e=t.replace(z,(function(t){return t[1].toUpperCase()}));R.get[t]=e,R.set[t]=function(t,n){n[e]=t.toString()}})),p(V).forEach((function(t){var e=V[t];R.get[t]=function(t){var n=[];return e.some((function(e,i){return n.push("/"===e?e:t[e]),!n[i]}))?"":n.join(" ")},R.set[t]=function(n,i){n&&"cssText"in i?i.cssText+=";"+t+":"+n:e.forEach((function(t){return i[t]="number"==typeof n?n+"px":n.toString()}))}}));var H=R;function $(t,e,n){return function(){var i=this,r=this[0];if(!r||e&&!r.parentNode)return this;for(var o=t?"":r.ownerDocument.createDocumentFragment(),a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return s.forEach((function(t){"function"==typeof t&&(t=t(i)),"string"==typeof t?"string"==typeof o?o+=t.trim():t=_(r.ownerDocument).createAll(t):t instanceof x&&(t=[t]),h(t)&&("string"==typeof o&&(t=_(r.ownerDocument).createAll(o).concat(t),o=r.ownerDocument.createDocumentFragment()),t.forEach((function(t){o.appendChild(t[0])})))})),"string"==typeof o?r.insertAdjacentHTML(t,o):n(r,o),this}}x.prototype.css=function(t,e){var n=this,i=arguments.length,r=this[0];if(!r)return 1===i&&h(t)?{}:1!==i||"string"!=typeof t?this:void 0;var o,a=r.style;if(1===i&&("string"==typeof t||h(t))){var s=function(t){var e=H.get[t]||H.find(t,a),n="function"==typeof e?e(a):a[e];return n||(o||(o=g(r)),n="function"==typeof e?e(o):o[e]),n};return"string"==typeof t?s(t):t.map(s).reduce((function(e,n,i){return e[t[i]]=n,e}),{})}if(2===i&&"string"==typeof t){var c=H.set[t]||H.find(t,a);"function"==typeof e&&(e=e(this)),null==e&&(e=""),"function"==typeof c?c(e,a):a[c]="number"==typeof e?e+"px":e.toString()}else{if(1!==i||!t||"object"!=typeof t)throw new v("css",arguments);p(t).forEach((function(e){n.css(e,t[e])}))}return this},x.prototype.after=$("afterend",!0,(function(t,e){t.parentNode.insertBefore(e,t.nextSibling)})),x.prototype.before=$("beforebegin",!0,(function(t,e){t.parentNode.insertBefore(e,t)})),x.prototype.prepend=$("afterbegin",!1,(function(t,e){t.insertBefore(e,t.firstChild)})),x.prototype.append=$("beforeend",!1,(function(t,e){t.appendChild(e)})),x.prototype.replace=$("",!0,(function(t,e){t.parentNode.replaceChild(e,t)})),x.prototype.remove=$("",!0,(function(t){t.parentNode.removeChild(t)}));var X={":focus":function(t){return t===t.ownerDocument.activeElement}};function q(t,e,n){return function(i){if(i&&"string"!=typeof i)throw new v(t,arguments);var r=this[0],o=n?[]:null;if(r){var a=O(i);!r||a&&"closest"===t||(r=r[e]);for(var s=r;s;s=s[e])if(!a||a(s)){if(!o){o=x(s);break}o.push(x(s))}}return o||new x}}x.prototype.matches=function(t){if(!t||"string"!=typeof t)throw new v("matches",arguments);var e=X[t]||O(t);return!!e(this[0])},x.prototype.offset=function(){var e=this[0],n={top:0,left:0,right:0,bottom:0,width:0,height:0};if(e){var i=(e.ownerDocument||e).documentElement,r=i.clientTop,o=i.clientLeft,a=t.pageYOffset||i.scrollTop,s=t.pageXOffset||i.scrollLeft,c=e.getBoundingClientRect();n.top=c.top+a-r,n.left=c.left+s-o,n.right=c.right+s-o,n.bottom=c.bottom+a-r,n.width=c.right-c.left,n.height=c.bottom-c.top}return n},x.prototype.next=q("next","nextElementSibling"),x.prototype.prev=q("prev","previousElementSibling"),x.prototype.nextAll=q("nextAll","nextElementSibling",!0),x.prototype.prevAll=q("prevAll","previousElementSibling",!0),x.prototype.closest=q("closest","parentNode"),x.prototype.value=function(t){var e=this[0];if(!e)return t?this:void 0;var n=e.tagName;if(void 0===t)return"SELECT"===n?~e.selectedIndex?e.options[e.selectedIndex].value:"":"OPTION"===n?e.hasAttribute("value")?e.value:e.text:"INPUT"===n||"TEXTAREA"===n?e.value:e.textContent;switch(n){case"INPUT":case"OPTION":case"TEXTAREA":"function"==typeof t&&(t=t(e.value)),e.value=t;break;case"SELECT":"function"==typeof t&&(t=t(e.value)),c.call(e.options,(function(e){return!(e.selected=e.value===t)}))&&(e.selectedIndex=-1);break;default:"function"==typeof t&&(t=t(e.textContent)),e.textContent=t}return this},x.prototype.empty=function(){return this.value("")};var W=a?"webkitTransitionEnd":"transitionend",J=a?"webkitAnimationEnd":"animationend";function K(t,e){this.node=t,this.style=t.style,this.eventType=e?J:W,this.animationName=e}K.prototype={handleEvent:function(t){this.animationName&&t.animationName!==this.animationName||(this.animationName&&(this.style.animationName="",this.style.animationDirection=""),this.node.removeEventListener(this.eventType,this,!0),"function"==typeof this.callback&&this.callback())},start:function(t,e){this.callback=t,this.animationName&&(this.style.animationName=this.animationName,this.style.animationDirection=e),this.node.addEventListener(this.eventType,this,!0)}};var Z=K;function G(t,e){return function(n,i){var r=this;if("string"!=typeof n&&(i=n,n=null),i&&"function"!=typeof i)throw new v(t,arguments);var o=this[0];if(!o)return this;var a=g(o);if(o&&a.width){var s=function(){o.style.visibility=e?"hidden":"inherit","function"==typeof i&&i(r)};o.ownerDocument.documentElement.contains(o)&&(n||0!==parseFloat(a["transition-duration"]))?n&&0===parseFloat(a["animation-duration"])?d(s):(o.style.visibility="visible",new Z(o,n).start(s,e?"normal":"reverse")):d(s)}return this.set("aria-hidden",String(e))}}x.prototype.show=G("show",!1),x.prototype.hide=G("hide",!0),b.prototype.clone=function(t){if("boolean"!=typeof t)throw new v("clone",arguments);var e=this[0];if(e){var n=e.cloneNode(t);if(this instanceof x)return new x(n);if(this instanceof _)return new _(n)}return new b},b.prototype.contains=function(t){var e=this[0];if(!e)return!1;if(t instanceof x){var n=t[0];return n===e||(e.contains?e.contains(n):16&e.compareDocumentPosition(n))}throw new v("contains",arguments)};var Q=/^(?:(\w+)|\.([\w\-]+))$/,tt=/'|\\/g;function et(t,e){return function(n){if("string"!=typeof n)throw new v(t,arguments);var i=this[0];if(!i)return e?[]:new b;var r,o,a,s,c=Q.exec(n);return c?(r=c[1]?i.getElementsByTagName(n):i.getElementsByClassName(c[2]))&&!e&&(r=r[0]):(o=!0,s=i,this instanceof _||((o=i.getAttribute("id"))?a=o.replace(tt,"\\$&"):(a="___40000__",i.setAttribute("id",a)),n=(a="[id='"+a+"'] ")+n.split(",").join(","+a)),r=s["querySelector"+e](n),o||i.removeAttribute("id")),e?f.call(r,x):x(r)}}b.prototype.find=et("find",""),b.prototype.findAll=et("findAll","All");var nt={};"onfocusin"in n?(nt.focus=function(t){t._type="focusin"},nt.blur=function(t){t._type="focusout"}):nt.focus=nt.blur=function(t){t.options.capture=!0},e.createElement("input").validity&&(nt.invalid=function(t){t.options.capture=!0});var it=nt,rt=!1;try{var ot=Object.defineProperty({},"passive",{get:function(){rt=!0}});t.addEventListener("test",null,ot)}catch(t){}function at(t,e,n,i){this.context=t,this.node=e,this.options=n,this.args=i,n.selector&&(this.matcher=O(n.selector,e))}at.prototype={handleEvent:function(t){if(this.event=t,this.currentTarget=this.matcher?this.matcher(t.target):this.node,this.currentTarget){!0===this.options.once&&this.unsubscribe();var e=this.args.map(this.getEventProperty,this);!1===this.callback.apply(this.context,e)&&t.preventDefault()}},getEventProperty:function(t){var e=arguments,n=this.event;if("type"===t)return this.type;if("target"===t||"relatedTarget"===t)return x(n[t]);if("currentTarget"===t)return x(this.currentTarget);var i=n[t];return"function"==typeof i?function(){return i.apply(n,e)}:i},subscribe:function(t,e){var n=it[t];this.type=t,this.callback=e,n&&n(this),this.node.addEventListener(this._type||this.type,this,this.getLastArgument())},unsubscribe:function(){this.node.removeEventListener(this._type||this.type,this,this.getLastArgument())},getLastArgument:function(){var t=!!this.options.capture;return this.options.passive&&rt&&(t={passive:!0,capture:t}),t}};var st=at;b.prototype.fire=function(t,e){var n,i,r,o=this[0];if("string"!=typeof t)throw new v("fire",arguments);var a=it[t],s={options:{}};if(a&&(s=a(s)||s),i=s._type||t,!o)return!0;if((n=(o.ownerDocument||o).createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),(r=o.dispatchEvent(n))&&o[t]){var c=st.prototype.handleEvent;st.prototype.handleEvent=function(e){if(this.type!==t)return c.call(this,e)},o[t](),st.prototype.handleEvent=c}return r};var ct={get:{},set:{}};"tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" ").forEach((function(t){ct.get[t.toLowerCase()]=function(e){return e[t]}})),ct.get.style=function(t){return t.style.cssText},ct.set.style=function(t,e){t.style.cssText=e},ct.get.type=function(t){return t.getAttribute("type")||t.type};var ut=ct;b.prototype.get=function(t,e){var n,i=this,r=this[0],o=ut.get[t];if(!r)return n;if(0===arguments.length)return r.innerHTML;if(o)n=o(r,t);else if("string"==typeof t)n=t in r?r[t]:this instanceof x?r.getAttribute(t):null;else{if(!h(t))throw new v("get",arguments);n=t.reduce((function(t,e){return t[e]=i.get(e),t}),{})}return null!=n?n:e},b.prototype.on=function(t,e,n,i){if("string"==typeof t&&("string"==typeof e?e={selector:e}:"function"==typeof e?(i=e,e={},n=[]):"object"==typeof e&&h(e)&&(i=n,n=e,e={}),"function"==typeof n&&(i=n,n=[]),e&&"object"==typeof e&&"function"==typeof i)){var r=this[0];if(!r)return function(){};var o=new st(this,r,e,n);return o.subscribe(t,i),function(){return o.unsubscribe()}}throw new v("on",arguments)},b.prototype.set=function(t,e){var n=this,i=this[0],r=arguments.length,o=ut.set[t];if(i)if("string"==typeof t)1===r&&(e=t,t="innerHTML"),"function"==typeof e&&(e=e(this.get(t))),o?o(i,e):null==e&&this instanceof x?i.removeAttribute(t):t in i?i[t]=e:this instanceof x&&i.setAttribute(t,e);else if(h(t))1===r?(i.textContent="",this.append.apply(this,t)):t.forEach((function(t){n.set(t,e)}));else{if("object"!=typeof t)throw new v("set",arguments);p(t).forEach((function(e){n.set(e,t[e])}))}return this}}()},303:function(t,e){
/**
 * better-dateinput-polyfill: input[type=date] polyfill for better-dom
 * @version 3.2.8 Fri, 31 Jan 2020 12:56:16 GMT
 * @link https://github.com/chemerisuk/better-dateinput-polyfill
 * @copyright 2020 Maksim Chemerisuk
 * @license MIT
 */
!function(){"use strict";var t=DOM.find("html"),e=t.get("lang")||void 0,n="orientation"in window?"mobile":"desktop",i="_"!==DOM.create("<input type='date'>").value("_").value();function r(t){return[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-")}function o(t){var e=new Date((t||"?")+"T00:00");return isNaN(e.getTime())?null:e}var a=DOM.findAll("meta[name^='data-format:']").reduce((function(t,n){var i=n.get("name").split(":")[1].trim(),r=JSON.parse(n.get("content"));if(i)try{t[i]=new window.Intl.DateTimeFormat(e,r)}catch(t){}return t}),{});DOM.extend("input[type=date]",{constructor:function(){if(this._isPolyfillEnabled())return!1;var t=this.css(["color","font-size","font-family","font-style","line-height","padding-left","border-left-width","text-indent"]);t.dx=["padding-left","border-left-width","text-indent"].map((function(e){return parseFloat(t[e])})).reduce((function(t,e){return t+e})),t.css=["font-family","font-style","line-height","font-size"].map((function(e){return e+":"+t[e]})).join(";").replace(/"/g,""),this._backgroundTemplate=('<svg xmlns="http://www.w3.org/2000/svg"><text x="'+t.dx+'" y="50%" dy=".35em" fill="'+t.color+'"></text></svg>').replace("></",' style="'+t.css+'"></');var e=DOM.create("<dateinput-picker tabindex='-1'>");e._parentInput=this,this.before(e.hide()),this._picker=e;var n=this._syncDisplayedText.bind(this,"defaultValue"),i=this._syncDisplayedText.bind(this,"value"),r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");Object.defineProperty(this[0],"value",{configurable:!1,enumerable:!0,get:r.get,set:this._setValue.bind(this,r.set,i)}),Object.defineProperty(this[0],"valueAsDate",{configurable:!1,enumerable:!0,get:this._getValueAsDate.bind(this),set:this._setValueAsDate.bind(this)}),this.on("change",i),this.on("focus",this._focusInput.bind(this)),this.on("blur",this._blurInput.bind(this)),this.on("keydown",["which"],this._keydownInput.bind(this)),this.on("click",this._focusInput.bind(this)),this.closest("form").on("reset",n),n()},_isPolyfillEnabled:function(){var t=this.get("data-polyfill");return"none"===t||(!t||t!==n&&"all"!==t?i:(this.set("type","text"),!1))},_setValue:function(t,e,n){var i=o(n);if(i){var a=new Date((this.get("min")||"?")+"T00:00"),s=new Date((this.get("max")||"?")+"T00:00");i<a?n=r(a):i>s&&(n=r(s))}else n="";t.call(this[0],n),e()},_getValueAsDate:function(){return o(this.value())},_setValueAsDate:function(t){t instanceof Date&&!isNaN(t.getTime())&&this.value(r(t))},_syncDisplayedText:function(t){var n=this.get(t),i=o(n);if(i){var r=this.get("data-format"),s=a[r];try{var c=new Date(i.getFullYear(),i.getMonth(),i.getDate(),12);n=s?s.format(c):c.toLocaleDateString(e,r?JSON.parse(r):{})}catch(t){}}this.css("background-image","url('data:image/svg+xml,"+encodeURIComponent(this._backgroundTemplate.replace("></",">"+n+"</"))+"')")},_keydownInput:function(t){if(13===t&&"true"===this._picker.get("aria-hidden"))return!0;if(32===t)this.get("readonly")||(this._picker.toggleState(!1),this._picker.invalidateState(),"true"===this._picker.get("aria-hidden")?this._picker.show():this._picker.hide());else if(27===t||9===t||13===t)this._picker.hide();else if(8===t||46===t)this.empty().fire("change");else if(17===t)this._picker.toggleState(),this._picker.invalidateState();else{var e;if(74===t||40===t?e=7:75===t||38===t?e=-7:76===t||39===t?e=1:72!==t&&37!==t||(e=-1),e){var n=this.get("valueAsDate")||new Date,i="true"===this._picker.get("aria-expanded");!i||40!==t&&38!==t?!i||37!==t&&39!==t?n.setDate(n.getDate()+e):n.setMonth(n.getMonth()+(e>0?1:-1)):n.setMonth(n.getMonth()+(e>0?4:-4)),this.value(r(n)).fire("change")}}return 9===t},_blurInput:function(){this._picker.hide()},_focusInput:function(){if(this.get("readonly"))return!1;var e=this.offset(),n=this._picker.offset(),i=e.height;t.get("clientHeight")<e.bottom+n.height&&(i=-n.height),this._picker.toggleState(!1),this._picker.invalidateState(),this._picker.css("margin-top",i).show()}}),DOM.importStyles("dateinput-picker{display:inline-block;vertical-align:bottom}dateinput-picker>object{position:absolute;z-index:1000;width:336px;height:320px;max-height:320px;box-shadow:0 8px 24px #888;background:#fff;opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transform-origin:0 0;transform-origin:0 0;transition:.1s ease-out}dateinput-picker[aria-hidden=true]>object{opacity:0;-webkit-transform:skew(-25deg) scaleX(.75);transform:skew(-25deg) scaleX(.75);visibility:hidden;height:0}dateinput-picker[aria-expanded=true]>object{height:220px;max-height:220px}dateinput-picker+input{color:transparent!important;caret-color:transparent!important}dateinput-picker+input::selection{background:none}dateinput-picker+input::-moz-selection{background:none}")}(),function(){"use strict";var t=DOM.find("html").get("lang")||void 0,e="orientation"in window?"touchend":"mousedown",n=function(){try{(new Date).toLocaleString("_")}catch(t){return t instanceof RangeError}return!1}();function i(t,e){return"string"==typeof e?Array(t+1).join(e):Array.apply(null,Array(t)).map(e).join("")}function r(e,n){return"en-US"===t?e:n}var o='<a rel="prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 16 16"><path d="M11.5 14.06L1 8L11.5 1.94z"/></svg></a><a rel="next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox="0 0 16 16"><path d="M15 8L4.5 14.06L4.5 1.94z"/></svg></a><b></b><table><thead>'+i(7,(function(e,i){return"<th>"+function(e){var i=new Date;if(i.setDate(i.getDate()-i.getDay()+e+r(0,1)),n)try{return i.toLocaleDateString(t,{weekday:"short"})}catch(t){}return i.toUTCString().split(",")[0].slice(0,2)}(i)}))+"</thead><tbody>"+i(7,"<tr>"+i(7,"<td>")+"</tr>")+"</tbody></table><table><tbody>"+i(3,(function(e,r){return"<tr>"+i(4,(function(e,i){return"<td>"+function(e){var i=new Date(null,e);if(n)try{return i.toLocaleDateString(t,{month:"short"})}catch(t){}return i.toUTCString().split(" ")[2]}(4*r+i)}))}))+"</tbody></table>";DOM.extend("dateinput-picker",{constructor:function(){var t="ScriptEngineMajorVersion"in window,e=DOM.create("<object type='text/html' width='100%' height='100%'>");t||e.set("data","about:blank"),this.on("load",{capture:!0,once:!0},["target"],this._loadContent.bind(this)),this.append(e),t&&e.set("data","about:blank")},_loadContent:function(t){var n=DOM.constructor(t.get("contentDocument")),i=n.find("body");n.importStyles("body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:2.5rem;text-align:center;cursor:default;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:0;overflow:hidden}a{position:absolute;width:3rem;height:2.5rem}a[rel=prev]{left:0}a[rel=next]{right:0}b{display:block;cursor:pointer}table{width:100%;table-layout:fixed;border-spacing:0;border-collapse:collapse;text-align:center;line-height:2.5rem}table+table{line-height:3.75rem;background:#fff;position:absolute;top:2.5rem;left:0;opacity:1;transition:.1s ease-out}table+table[aria-hidden=true]{visibility:hidden!important;opacity:0}td,th{padding:0}thead{background:#ddd;font-size:smaller;font-weight:700}[aria-selected=false],[aria-disabled=true]{color:#888}[aria-selected=true]{box-shadow:inset 0 0 0 1px #888}a:hover,td:hover,[aria-disabled=true],[aria-selected=true]{background-color:#f5f5f5}"),i.set(o),this._calendarDays=i.find("table"),this._calendarMonths=i.find("table+table"),this._calendarCaption=i.find("b"),this._calendarDays.on("picker:invalidate",["detail"],this._invalidateDays.bind(this)),this._calendarMonths.on("picker:invalidate",["detail"],this._invalidateMonths.bind(this)),i.on("picker:invalidate",["detail"],this._invalidateCaption.bind(this)),i.on(e,"a",["currentTarget"],this._clickPickerButton.bind(this)),i.on(e,"td",["target"],this._clickPickerDay.bind(this)),this._calendarCaption.on(e,this._clickCaption.bind(this)),i.on(e,(function(){return!1})),this._parentInput.on("change",this.invalidateState.bind(this)),DOM.get("activeElement")===this._parentInput[0]&&this.show()},_invalidateDays:function(t){var e=t.getMonth(),n=t.getDate(),i=t.getFullYear(),o=new Date((this._parentInput.get("min")||"?")+"T00:00"),a=new Date((this._parentInput.get("max")||"?")+"T00:00"),s=new Date(i,e,1);s.setDate(1-s.getDay()-r(1,0===s.getDay()?7:0)),this._calendarDays.findAll("td").forEach((function(t){s.setDate(s.getDate()+1);var r=e-s.getMonth(),c=null,u=null;i!==s.getFullYear()&&(r*=-1),s<o||s>a?u="true":r>0||r<0?c="false":n===s.getDate()&&(c="true"),t._ts=s.getTime(),t.set("aria-selected",c),t.set("aria-disabled",u),t.value(s.getDate())}))},_invalidateMonths:function(t){var e=t.getMonth(),n=t.getFullYear(),i=new Date((this._parentInput.get("min")||"?")+"T00:00"),r=new Date((this._parentInput.get("max")||"?")+"T00:00"),o=new Date(n,e,1);this._calendarMonths.findAll("td").forEach((function(t,n){o.setMonth(n);var a=e-o.getMonth(),s=null;o<i||o>r?s="false":a||(s="true"),t._ts=o.getTime(),t.set("aria-selected",s)}))},_invalidateCaption:function(e){var i=e.getFullYear();"true"!==this.get("aria-expanded")&&(i=function(e){var i=new Date(e.getFullYear(),e.getMonth(),12);if(n)try{return i.toLocaleDateString(t,{month:"long",year:"numeric"})}catch(t){}return i.toUTCString().split(" ").slice(2,4).join(" ")}(e)),this._calendarCaption.value(i)},_clickCaption:function(){this.toggleState(),this.invalidateState()},_clickPickerButton:function(t){var e="next"===t.get("rel")?1:-1,n=this._parentInput.get("valueAsDate")||new Date;"true"===this.get("aria-expanded")?n.setFullYear(n.getFullYear()+e):n.setMonth(n.getMonth()+e),this._parentInput.set("valueAsDate",n).fire("change")},_clickPickerDay:function(t){var e;"true"===this.get("aria-expanded")?(e=isNaN(t._ts)?new Date:new Date(t._ts),this.toggleState(!1)):isNaN(t._ts)||(e=new Date(t._ts),this.hide()),null!=e&&this._parentInput.set("valueAsDate",e).fire("change")},toggleState:function(t){"boolean"!=typeof t&&(t="true"!==this.get("aria-expanded")),this.set("aria-expanded",t)},invalidateState:function(){var t="true"===this.get("aria-expanded"),e=t?this._calendarMonths:this._calendarDays,n=this._parentInput.get("valueAsDate")||new Date;e.fire("picker:invalidate",n),t?this._calendarMonths.show():this._calendarMonths.hide()}})}()}});
//# sourceMappingURL=rh_compat.js.map