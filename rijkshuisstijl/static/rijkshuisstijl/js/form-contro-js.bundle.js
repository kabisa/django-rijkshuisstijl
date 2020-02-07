(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-contro-js"],{

/***/ "./rijkshuisstijl/js/components/form/form-control.js":
/*!***********************************************************!*\
  !*** ./rijkshuisstijl/js/components/form/form-control.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./rijkshuisstijl/js/components/form/constants.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * Keeps track of inputs and their values and copies those to data attributes of node.
 * @class
 */var FormControl=/*#__PURE__*/function(){/**
     * Constructor method.
     * @param {HTMLElement} node
     */function FormControl(node){_classCallCheck(this,FormControl);/** @type {HTMLElement} */this.node=node;this.bindEvents();this.update();}/**
     * Returns all inputs, selects and textareas within this.node.
     * @return {HTMLElement[]}
     */_createClass(FormControl,[{key:"getInputs",value:function getInputs(){return _toConsumableArray(this.node.querySelectorAll('input, select, textarea'));}/**
     * Returns all inputs, selects and textareas within this.node with a name attribute set.
     * @return {HTMLElement[]}
     */},{key:"getNamedInputs",value:function getNamedInputs(){return this.getInputs().filter(function(input){return input.name;});}/**
     * Binds events to callbacks.
     */},{key:"bindEvents",value:function bindEvents(){this.node.addEventListener('change',this.update.bind(this));this.node.addEventListener('input',this.update.bind(this));this.node.addEventListener('click',this.update.bind(this));this.node.addEventListener('touchend',this.update.bind(this));this.node.addEventListener('keyup',this.update.bind(this));}/**
     * Copies inputs select and textreas name and values to data attributes of this.node.
     */},{key:"update",value:function update(){setTimeout(this._update.bind(this));}/**
     * @private
     */},{key:"_update",value:function _update(){var _this=this;try{var namedInputs=this.getNamedInputs();// Set names (data-input-names="foo,bar").
var namedInputNames=_toConsumableArray(new Set(namedInputs.map(function(namedInput){return namedInput.name;})));if(namedInputNames.length){this.node.dataset.inputNames=namedInputNames;}else{delete this.node.dataset.inputNames;}// Set values (data-foo-value="bar").
namedInputs.forEach(function(namedInput){var datasetItem="".concat(namedInput.name,"Value");var value=namedInput.value;// Checkbox
if(namedInput.type==='checkbox'&&!namedInput.checked){return;}// Radio
if(namedInput.type==='radio'&&!namedInput.checked){return;}// Select multiple
if(namedInput.multiple&&namedInput.options){var values=_toConsumableArray(namedInput.options).filter(function(option){return option.selected;}).map(function(selectedOption){return selectedOption.value||selectedOption.textContent;});if(values.length){value=values;}else{value=false;}}if(value){_this.node.dataset[datasetItem]=value;}else{delete _this.node.dataset[datasetItem];}});// Checked
namedInputs.filter(function(namedInput){return namedInput.checked&&namedInput.value;}).forEach(function(checkedInput){var datasetItem="".concat(checkedInput.name,"Value");_this.node.dataset[datasetItem]=checkedInput.value;});}catch(e){var str=this.node.dataset.inputNames||this.node.id||this.node;console.warn("Unable to inspect form control (".concat(str,"), got error: ").concat(e,"."));}}}]);return FormControl;}();// Start!
_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_0__["FORM_CONTROLS"]).forEach(function(node){return new FormControl(node);});

/***/ })

}]);