(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-input"],{

/***/ "./node_modules/flatpickr/dist/l10n/nl.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/nl.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Dutch = {
      weekdays: {
          shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          longhand: [
              "zondag",
              "maandag",
              "dinsdag",
              "woensdag",
              "donderdag",
              "vrijdag",
              "zaterdag",
          ]
      },
      months: {
          shorthand: [
              "jan",
              "feb",
              "mrt",
              "apr",
              "mei",
              "jun",
              "jul",
              "aug",
              "sept",
              "okt",
              "nov",
              "dec",
          ],
          longhand: [
              "januari",
              "februari",
              "maart",
              "april",
              "mei",
              "juni",
              "juli",
              "augustus",
              "september",
              "oktober",
              "november",
              "december",
          ]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "wk",
      rangeSeparator: " tot ",
      scrollTitle: "Scroll voor volgende / vorige",
      toggleTitle: "Klik om te wisselen",
      time_24hr: true,
      ordinal: function (nth) {
          if (nth === 1 || nth === 8 || nth >= 20)
              return "ste";
          return "de";
      }
  };
  fp.l10ns.nl = Dutch;
  var nl = fp.l10ns;

  exports.Dutch = Dutch;
  exports.default = nl;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./rijkshuisstijl/js/components/form/date-input.js":
/*!*********************************************************!*\
  !*** ./rijkshuisstijl/js/components/form/date-input.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bem.js */ "./node_modules/bem.js/dist/bem.js");
/* harmony import */ var bem_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bem_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_l10n_nl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/l10n/nl */ "./node_modules/flatpickr/dist/l10n/nl.js");
/* harmony import */ var flatpickr_dist_l10n_nl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_nl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./rijkshuisstijl/js/components/form/constants.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * Adds a datepicker to date inputs.
 * @class
 */var DateInput=/*#__PURE__*/function(){/**
     * Constructor method.
     * @param {HTMLInputElement} node
     */function DateInput(node){_classCallCheck(this,DateInput);/** @type {HTMLInputElement} */this.node=node;this.update();}/**
     * Returns the date format to use with the datepicker.
     * @return {string}
     */_createClass(DateInput,[{key:"getDateFormat",value:function getDateFormat(){if(this.node.dataset.dateFormat){return this.node.dataset.dateFormat;}return this.isDateTime()?'d-m-Y H:1':'d-m-Y';}/**
     * Returns the (Dutch) locale to use.
     * @return {CustomLocale}
     */},{key:"getLocale",value:function getLocale(){var locale=flatpickr_dist_l10n_nl__WEBPACK_IMPORTED_MODULE_2__["Dutch"];locale.firstDayOfWeek=0;return locale;}/**
     * Returns the mode to use, either "range" or "single".
     * @return {string}
     */},{key:"getMode",value:function getMode(){return bem_js__WEBPACK_IMPORTED_MODULE_0___default.a.hasModifier(this.node,_constants__WEBPACK_IMPORTED_MODULE_3__["MODIFIER_DATE_RANGE"])?'range':'single';}/**
     * @TODO: Yet to be supported.
     * @return {boolean}
     */},{key:"isDateTime",value:function isDateTime(){return this.node.type==='datetime';}},{key:"updatePlaceholder",value:function updatePlaceholder(){if(!this.node.placeholder){var placeholder=this.getDateFormat().replace('d','dd').replace('m','mm').replace('Y','yyyy');this.node.placeholder=placeholder;}}/**
     * Adds the datepicker.
     */},{key:"update",value:function update(){this.updatePlaceholder();var flatPicker=flatpickr__WEBPACK_IMPORTED_MODULE_1___default()(this.node,{altInput:true,altFormat:this.getDateFormat(),dateFormat:'Y-m-d',defaultDate:this.node.value.split('/'),locale:this.getLocale(),mode:this.getMode()});flatPicker.l10n.rangeSeparator='/';}}]);return DateInput;}();// Start!
[].concat(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_INPUTS"]),_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_3__["DATE_RANGE_INPUTS"])).forEach(function(node){return new DateInput(node);});

/***/ })

}]);