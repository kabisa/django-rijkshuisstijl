(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{318:function(e,n,t){"use strict";t.r(n);var r=t(303),o=t.n(r),a=t(29);function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l,u=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=n,this.update()}var n,t,r;return n=e,(t=[{key:"getPlaceholderFormat",value:function(){return this.isTime()?"00:00":""}},{key:"isTime",value:function(){return"time"===this.node.type}},{key:"updatePlaceholder",value:function(){if(!this.node.placeholder){var e=this.getPlaceholderFormat();this.node.placeholder=e}}},{key:"update",value:function(){this.updatePlaceholder(),o()(this.node,{enableTime:!0,noCalendar:!0,time_24hr:!0})}}])&&i(n.prototype,t),r&&i(n,r),e}();(l=a.l,function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(l)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()).forEach((function(e){return new u(e)}))}}]);
//# sourceMappingURL=time-input.bundle.js.map