(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{294:function(e,t,n){"use strict";n.r(t);var r=n(293),i=n.n(r),o=n(117);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=t,this.update()}var t,n,r;return t=e,(n=[{key:"getTimeFormat",value:function(){return this.isTime()?"H:i":""}},{key:"getPlaceholderFormat",value:function(){return this.isTime()?"00:00":""}},{key:"isTime",value:function(){return"time"===this.node.type}},{key:"updatePlaceholder",value:function(){if(!this.node.placeholder){var e=this.getPlaceholderFormat();this.node.placeholder=e}}},{key:"update",value:function(){this.updatePlaceholder(),i()(this.node,{enableTime:!0,noCalendar:!0,time_24hr:!0})}}])&&a(t.prototype,n),r&&a(t,r),e}();(u=o.a,function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(u)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()).forEach((function(e){return new c(e)}))}}]);
//# sourceMappingURL=time-input.bundle.js.map