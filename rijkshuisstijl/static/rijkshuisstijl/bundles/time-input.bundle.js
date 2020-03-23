(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["time-input"],{

/***/ "./rijkshuisstijl/js/components/form/time-input.js":
/*!*********************************************************!*\
  !*** ./rijkshuisstijl/js/components/form/time-input.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./rijkshuisstijl/js/components/form/constants.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * Adds a timepicker to time inputs.
 * @class
 */var TimeInput=/*#__PURE__*/function(){/**
     * Constructor method.
     * @param {HTMLInputElement} node
     */function TimeInput(node){_classCallCheck(this,TimeInput);/** @type {HTMLInputElement} */this.node=node;this.update();}_createClass(TimeInput,[{key:"getTimeFormat",value:function getTimeFormat(){if(this.node.dataset.timeFormat){return this.node.dataset.timeFormat;}return this.isTime()?'H:i':'';}},{key:"isTime",value:function isTime(){return this.node.type==='time';}},{key:"updatePlaceholder",value:function updatePlaceholder(){if(!this.node.placeholder){var placeholder=this.getTimeFormat();this.node.placeholder=placeholder;}}/**
     * Adds the timepicker.
     */},{key:"update",value:function update(){this.updatePlaceholder();flatpickr__WEBPACK_IMPORTED_MODULE_0___default()(this.node,{enableTime:true,noCalendar:true,dateFormat:this.getTimeFormat(),time_24hr:true});}}]);return TimeInput;}();// Start!
_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_1__["TIME_INPUTS"]).forEach(function(node){return new TimeInput(node);});

/***/ })

}]);