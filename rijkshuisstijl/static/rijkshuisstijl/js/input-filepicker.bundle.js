(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(n,t,e){"use strict";e.r(t);var i=e(49);function r(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var o,a=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.node=t,this.input=this.node.previousElementSibling,this.bindEvents()}var t,e,i;return t=n,(e=[{key:"getFileName",value:function(){return this.input.files.length?this.input.files[0].name:""}},{key:"bindEvents",value:function(){this.input.addEventListener("change",this.update.bind(this))}},{key:"update",value:function(){this.node.textContent=this.getFileName()}}])&&r(t.prototype,e),i&&r(t,i),n}();(o=i.d,function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(o)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()).forEach(function(n){return new a(n)})}}]);
//# sourceMappingURL=input-filepicker.bundle.js.map