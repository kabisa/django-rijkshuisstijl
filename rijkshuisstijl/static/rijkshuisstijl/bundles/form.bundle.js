(self.webpackChunkdjango_rijkshuisstijl=self.webpackChunkdjango_rijkshuisstijl||[]).push([[680],{6151:function(e,t,n){"use strict";n.r(t);var r=n(7690);n.n(r)().register()},7690:function(e){window,e.exports=function(){return n={},e.m=t=[function(e,t,n){"use strict";var r,i={eventLast:"submitlast",eventBefore:"submitbefore",eventStart:"submitstart",eventEnd:"submitend"},o=document,u=o.defaultView,a=Element.prototype.closest,l=Object.assign,c=u.CustomEvent,f=null,s=null,v=!1,d=null;function m(e){var t=e.target;!(t=t&&a.call(t,"button,input"))||"submit"!==t.type&&"image"!==t.type||(s=t,setTimeout((function(){s=null}),1))}function p(){f=null,v=!1,u.removeEventListener("submit",y),u.addEventListener("submit",y)}function b(e,t){var n={transport:"default"};return e===d.eventBefore&&(n.activeButton=s),void 0!==t&&(n.timeout=t),new c(e,{bubbles:!0,cancelable:!1,detail:n})}function h(e,t,n){var r=b(t,n);e.dispatchEvent(r)}function y(e){u.removeEventListener("submit",y);var t=e.target,n=new c(d.eventLast,{bubbles:!0,cancelable:!0,detail:{activeButton:s}});e.defaultPrevented&&n.preventDefault(),t.dispatchEvent(n),n.defaultPrevented?e.preventDefault():h(f=t,d.eventBefore)}function E(){f&&!v&&h(f,d.eventStart),v=!0,r=r||b(d.eventEnd)}function g(e){f&&(r?(r.detail.timeout=e,f.dispatchEvent(r)):h(f,d.eventEnd,e)),f=null,v=!1}function S(){g(!1)}t.a={setShim:function(e,t,n){a=e||a,l=t||l,c=n||c},getSendingForm:function(){return f},forceSubmitEnd:function(e){g(e)},getSettings:function(){return d},register:function(e){if(d)throw new Error("form-extra-events already registered");return d=l({},i,e||{}),u.addEventListener("click",m),o.addEventListener("submit",p),u.addEventListener("beforeunload",E),u.addEventListener("unload",S),d},unregister:function(){d=null,u.removeEventListener("click",m),o.removeEventListener("submit",p),u.removeEventListener("beforeunload",E),u.removeEventListener("unload",S)}}},function(e,t,n){"use strict";var r=n(0);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o,u,a,l,c,f,s=document,v=s.defaultView,d=Element.prototype.closest,m=v.Event;function p(e){return e.style.display="none",e}function b(e){return"submit"===e.type||"image"===e.type}function h(e,t){var n,r=e.compareDocumentPosition(t),i=2==(19&r);if(!i&&4!=(21&r))return null;i?(n=l=l||p(s.createElement("div")),e.insertBefore(n,e.firstChild)):(n=c=c||p(s.createElement("div")),e.appendChild(n));var o=t.cloneNode(!0);return t.parentNode.replaceChild(o,t),n.appendChild(t),setTimeout(y,0),o}function y(){a&&a.parentNode.replaceChild(u,a),l&&l.parentNode.removeChild(l),c&&c.parentNode.removeChild(c),l=c=a=u=null}function E(e){for(var t=0;t<e.length;t++){var n=e[t];if(b(n))return n}}function g(e){var t=e.target;if(!e.defaultPrevented&&-1!==["INPUT","BUTTON"].indexOf(t.nodeName)&&("Enter"===e.key||13===(e.keyCode||e.which||e.charCode))){var n=t.getAttribute("form"),r=n?s.querySelector("form#"+n):t.form;if(r&&r.id){var i,o=E(s.querySelectorAll('[form="'+r.id+'"]')),u=E(r.elements);i=o&&u?4==(4&o.compareDocumentPosition(u))?o:u:o||u,e.preventDefault(),i&&i.dispatchEvent(new m("click",{bubbles:!0,cancelable:!0}))}else n&&e.preventDefault()}}function S(e){if(!e.defaultPrevented){var t=e.target;if((t=t&&d.call(t,"button,input"))&&b(t)){var n=t.getAttribute("form");if(n){var r=d.call(t,"form");r&&r.id===n||((r=s.querySelector("form#"+n))?a=h(r,u=t):e.preventDefault())}}}}function L(){y()}function j(e){var t=e.target;f=[];for(var n=0;n<t.elements.length;n++){var r=t.elements[n],i=r.getAttribute("form");i&&i!==t.id&&""!==r.name&&!r.disabled&&-1===["reset","submit","button","image"].indexOf(r.type)&&(f.push([null,r.name,r]),r.removeAttribute("name"))}if(t.id)for(var o=s.querySelectorAll('[form="'+t.id+'"]'),u=0;u<o.length;u++){var a=o[u],l=h(t,a);l&&f.push([l,null,a])}}function w(){for(var e=0;e<f.length;e++){var t=i(f[e],3),n=t[0],r=t[1],o=t[2];r?o.setAttribute("name",r):n.parentNode.replaceChild(o,n)}y(),f=[]}t.a={setShim:function(e,t){d=e||d,m=t||m},register:function(){function e(){if(!function(){var e=s.createElement("div"),t=s.createElement("form"),n=s.createElement("input"),r="_tmp"+Date.now();t.id=r,n.setAttribute("form",r),s.body.appendChild(p(e)),e.appendChild(t),e.appendChild(n);var i=n.form===t;return s.body.removeChild(e),i}()){if(o)throw new Error("form-association-polyfill already registered");o=(o=r.a.getSettings())||r.a.register(),v.addEventListener("keypress",g),v.addEventListener("click",S),v.addEventListener("submit",L,!0),v.addEventListener(o.eventBefore,j),v.addEventListener(o.eventStart,w)}}s.body?e():s.addEventListener("DOMContentLoaded",e)},unregister:function(){o&&(v.removeEventListener("keypress",g),v.removeEventListener("click",S),v.removeEventListener("submit",L,!0),v.removeEventListener(o.eventBefore,j),v.removeEventListener(o.eventStart,w),o=null)}}},function(e,t,n){"use strict";n.r(t);var r,i,o,u,a=(i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector,Element.prototype.closest||function(e){for(var t=this;t;){if(r.call(t,e))return t;t=t.parentElement}return null}),l=Object.assign||function(e){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=0;n<(arguments.length<=1?0:arguments.length-1);n++){var r=n+1<1||arguments.length<=n+1?void 0:arguments[n+1];if(null!=r)for(var i=Object.keys(Object(r)),o=0,u=i.length;o<u;o++){var a=i[o],l=Object.getOwnPropertyDescriptor(r,a);void 0!==l&&l.enumerable&&(t[a]=r[a])}}return t},c=(o=CustomEvent.prototype,"function"!=typeof(u=CustomEvent)&&((u=function(e,t){t=t||{bubbles:!1,cancelable:!1};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n.preventDefault=function(){if(o.preventDefault.apply(this),this.cancelable)try{Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}catch(e){}},n}).prototype=o),u),f=n(0);f.a.setShim(a,l,c),f.a;var s,v,d=(s=Event,"function"!=typeof(v=s)&&(v=function(e,t){t=t||{bubbles:!1,cancelable:!1};var n=document.createEvent("Event");return n.initEvent(e,t.bubbles,t.cancelable),n.preventDefault=function(){if(s.prototype.preventDefault.apply(this),this.cancelable)try{Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}catch(e){}},n},Object.keys(s).forEach((function(e){v[e]=s[e]})),v.prototype=s.prototype),v),m=n(1);m.a.setShim(a,d),t.default=m.a}],e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(e){return t[e]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.p="",e(e.s=2);function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t,n}()}}]);
//# sourceMappingURL=form.bundle.js.map