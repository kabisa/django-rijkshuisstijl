(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(n,t){function e(n,t,e){var r,o,i,a,u;function l(){var c=Date.now()-a;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,e||(u=n.apply(i,o),i=o=null))}null==t&&(t=100);var c=function(){i=this,o=arguments,a=Date.now();var c=e&&!r;return r||(r=setTimeout(l,t)),c&&(u=n.apply(i,o),i=o=null),u};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(u=n.apply(i,o),i=o=null,clearTimeout(r),r=null)},c}e.debounce=e,n.exports=e},334:function(n,t,e){"use strict";e.r(t);var r=e(5),o=e.n(r),i=e(128),a=e(327);function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var l,c=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.node=t,this.bindEvents()}var t,e,r;return t=n,(e=[{key:"bindEvents",value:function(){window.addEventListener("scroll",a(this.update.bind(this)))}},{key:"update",value:function(){var n=this.node.style.top||0,t=this.node.getClientRects()[0].top<=n,e=o.a.hasModifier(this.node,i.a);o.a.toggleModifier(this.node,i.a,t),!e&&t&&window.scrollBy(0,10)}}])&&u(t.prototype,e),r&&u(t,r),n}();(l=i.b,function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(l)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()).forEach(function(n){return new c(n)})}}]);
//# sourceMappingURL=sticky-navigation-bar.bundle.js.map