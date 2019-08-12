webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/ignaciopastor/Documents/github/iggy/using-react-hooks/pages/index.js";


var InputElement = function InputElement() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      inputText = _useState2[0],
      setInputText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      historyList = _useState4[0],
      setHistoryList = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    onChange: function onChange(e) {
      setInputText(e.target.value);
      setHistoryList([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(historyList), [e.target.value]));
    },
    placeholder: "Enter Some Text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), inputText, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, historyList.map(function (rec) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, rec);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InputElement);

/***/ })

})
//# sourceMappingURL=index.js.f815d9d389c15d38b657.hot-update.js.map