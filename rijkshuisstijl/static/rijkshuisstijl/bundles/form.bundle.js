(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{307:function(e,t,n){window,e.exports=function(){return n={},e.m=t=[function(e,t,n){"use strict";var r,o={eventLast:"submitlast",eventBefore:"submitbefore",eventStart:"submitstart",eventEnd:"submitend"},i=document,a=i.defaultView,u=Element.prototype.closest,l=Object.assign,c=a.CustomEvent,f=null,s=null,d=!1,v=null;function p(e){var t=e.target;!(t=t&&u.call(t,"button,input"))||"submit"!==t.type&&"image"!==t.type||(s=t,setTimeout((function(){s=null}),1))}function m(){f=null,d=!1,a.removeEventListener("submit",h),a.addEventListener("submit",h)}function b(e,t){var n={transport:"default"};return e===v.eventBefore&&(n.activeButton=s),void 0!==t&&(n.timeout=t),new c(e,{bubbles:!0,cancelable:!1,detail:n})}function y(e,t,n){var r=b(t,n);e.dispatchEvent(r)}function h(e){a.removeEventListener("submit",h);var t=e.target,n=new c(v.eventLast,{bubbles:!0,cancelable:!0,detail:{activeButton:s}});e.defaultPrevented&&n.preventDefault(),t.dispatchEvent(n),n.defaultPrevented?e.preventDefault():y(f=t,v.eventBefore)}function E(){f&&!d&&y(f,v.eventStart),d=!0,r=r||b(v.eventEnd)}function g(e){f&&(r?(r.detail.timeout=e,f.dispatchEvent(r)):y(f,v.eventEnd,e)),f=null,d=!1}function w(){g(!1)}t.a={setShim:function(e,t,n){u=e||u,l=t||l,c=n||c},getSendingForm:function(){return f},forceSubmitEnd:function(e){g(e)},getSettings:function(){return v},register:function(e){if(v)throw new Error("form-extra-events already registered");return v=l({},o,e||{}),a.addEventListener("click",p),i.addEventListener("submit",m),a.addEventListener("beforeunload",E),a.addEventListener("unload",w),v},unregister:function(){v=null,a.removeEventListener("click",p),i.removeEventListener("submit",m),a.removeEventListener("beforeunload",E),a.removeEventListener("unload",w)}}},function(e,t,n){"use strict";var r=n(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i,a,u,l,c,f,s=document,d=s.defaultView,v=Element.prototype.closest,p=d.Event;function m(e){return e.style.display="none",e}function b(e){return"submit"===e.type||"image"===e.type}function y(e,t){var n,r=e.compareDocumentPosition(t),o=2==(19&r);if(!o&&4!=(21&r))return null;o?(n=l=l||m(s.createElement("div")),e.insertBefore(n,e.firstChild)):(n=c=c||m(s.createElement("div")),e.appendChild(n));var i=t.cloneNode(!0);return t.parentNode.replaceChild(i,t),n.appendChild(t),setTimeout(h,0),i}function h(){u&&u.parentNode.replaceChild(a,u),l&&l.parentNode.removeChild(l),c&&c.parentNode.removeChild(c),l=c=u=a=null}function E(e){for(var t=0;t<e.length;t++){var n=e[t];if(b(n))return n}}function g(e){var t=e.target;if(!e.defaultPrevented&&("Enter"===e.key||13===(e.keyCode||e.which||e.charCode))){var n=t.getAttribute("form"),r=n?s.querySelector("form#"+n):t.form;if(r&&r.id){var o,i=E(s.querySelectorAll('[form="'+r.id+'"]')),a=E(r.elements);o=i&&a?4==(4&i.compareDocumentPosition(a))?i:a:i||a,e.preventDefault(),o&&o.dispatchEvent(new p("click",{bubbles:!0,cancelable:!0}))}else n&&e.preventDefault()}}function w(e){if(!e.defaultPrevented){var t=e.target;if((t=t&&v.call(t,"button,input"))&&b(t)){var n=t.getAttribute("form");if(n){var r=v.call(t,"form");r&&r.id===n||((r=s.querySelector("form#"+n))?u=y(r,a=t):e.preventDefault())}}}}function S(){h()}function C(e){var t=e.target;f=[];for(var n=0;n<t.elements.length;n++){var r=t.elements[n],o=r.getAttribute("form");o&&o!==t.id&&""!==r.name&&!r.disabled&&-1===["reset","submit","button","image"].indexOf(r.type)&&(f.push([null,r.name,r]),r.removeAttribute("name"))}if(t.id)for(var i=s.querySelectorAll('[form="'+t.id+'"]'),a=0;a<i.length;a++){var u=i[a],l=y(t,u);l&&f.push([l,null,u])}}function L(){for(var e=0;e<f.length;e++){var t=o(f[e],3),n=t[0],r=t[1],i=t[2];r?i.setAttribute("name",r):n.parentNode.replaceChild(i,n)}h(),f=[]}t.a={setShim:function(e,t){v=e||v,p=t||p},register:function(){function e(){if(!function(){var e=s.createElement("div"),t=s.createElement("form"),n=s.createElement("input"),r="_tmp"+Date.now();t.id=r,n.setAttribute("form",r),s.body.appendChild(m(e)),e.appendChild(t),e.appendChild(n);var o=n.form===t;return s.body.removeChild(e),o}()){if(i)throw new Error("form-association-polyfill already registered");i=(i=r.a.getSettings())||r.a.register(),d.addEventListener("keypress",g),d.addEventListener("click",w),d.addEventListener("submit",S,!0),d.addEventListener(i.eventBefore,C),d.addEventListener(i.eventStart,L)}}s.body?e():s.addEventListener("DOMContentLoaded",e)},unregister:function(){i&&(d.removeEventListener("keypress",g),d.removeEventListener("click",w),d.removeEventListener("submit",S,!0),d.removeEventListener(i.eventBefore,C),d.removeEventListener(i.eventStart,L),i=null)}}},function(e,t,n){"use strict";n.r(t);var r,o,i,a,u=(o=Element.prototype,r=o.matches||o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector,Element.prototype.closest||function(e){for(var t=this;t;){if(r.call(t,e))return t;t=t.parentElement}return null}),l=Object.assign||function(e){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=0;n<(arguments.length<=1?0:arguments.length-1);n++){var r=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];if(null!=r)for(var o=Object.keys(Object(r)),i=0,a=o.length;i<a;i++){var u=o[i],l=Object.getOwnPropertyDescriptor(r,u);void 0!==l&&l.enumerable&&(t[u]=r[u])}}return t},c=(i=CustomEvent.prototype,"function"!=typeof(a=CustomEvent)&&((a=function(e,t){t=t||{bubbles:!1,cancelable:!1};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n.preventDefault=function(){if(i.preventDefault.apply(this),this.cancelable)try{Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}catch(e){}},n}).prototype=i),a),f=n(0);f.a.setShim(u,l,c),f.a;var s,d,v=(s=Event,"function"!=typeof(d=s)&&(d=function(e,t){t=t||{bubbles:!1,cancelable:!1};var n=document.createEvent("Event");return n.initEvent(e,t.bubbles,t.cancelable),n.preventDefault=function(){if(s.prototype.preventDefault.apply(this),this.cancelable)try{Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}catch(e){}},n},Object.keys(s).forEach((function(e){d[e]=s[e]})),d.prototype=s.prototype),d),p=n(1);p.a.setShim(u,v),t.default=p.a}],e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=2);function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t,n}()},317:function(e,t,n){"use strict";n.r(t);var r=n(307),o=n.n(r),i=n(27);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=t,this.bindEvents()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.checkSupport()||this.node.addEventListener("keypress",(function(t){t.keyCode===i.h&&e.insertNewLine(t)}))}},{key:"checkSupport",value:function(){var e=document.createElement("div"),t=document.createElement("form"),n=document.createElement("input"),r="_tmp"+Date.now();t.id=r,n.setAttribute("form",r),e.style.display="none",document.body.appendChild(e),e.appendChild(t),e.appendChild(n);var o=n.form===t;return document.body.removeChild(e),o}},{key:"insertNewLine",value:function(e){this.node.textContent+="\n",e.preventDefault()}}])&&u(t.prototype,n),r&&u(t,r),e}();o.a.register(),(l=i.n,function(e){if(Array.isArray(e))return a(e)}(l)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(l)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return new c(e)}))}}]);
//# sourceMappingURL=form.bundle.js.map