(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{324:function(n,t,e){"use strict";e.r(t),e.d(t,"LinkSelect",(function(){return u}));var r=e(27);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var i,u=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.node=t,this.bindEvents()}var t,e,r;return t=n,(e=[{key:"bindEvents",value:function(){this.node.addEventListener("change",this.navigate.bind(this))}},{key:"navigate",value:function(){var n=this.node.dataset.target,t=this.node.value||this.node.dataset.value;"_blank"!==n?location.href=t:window.open(t)}}])&&a(t.prototype,e),r&&a(t,r),n}();(i=r.h,function(n){if(Array.isArray(n))return o(n)}(i)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(i)||function(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(n){return new u(n)}))}}]);
//# sourceMappingURL=link-select.bundle.js.map