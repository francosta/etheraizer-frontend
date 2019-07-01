webpackHotUpdate("static/development/pages/projects/createproject.js",{

/***/ "./ethereum/projectContract.js":
/*!*************************************!*\
  !*** ./ethereum/projectContract.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_Fundraise_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Fundraise.json */ "./ethereum/build/Fundraise.json");
var _build_Fundraise_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/Fundraise.json */ "./ethereum/build/Fundraise.json", 1);

 // This is a function that will create a 'Fundraise' contract for each address that it's passed onto it

/* harmony default export */ __webpack_exports__["default"] = (function (address) {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_Fundraise_json__WEBPACK_IMPORTED_MODULE_1__.interface), address);
});

/***/ })

})
//# sourceMappingURL=createproject.js.7045eee14f0acc0cd092.hot-update.js.map