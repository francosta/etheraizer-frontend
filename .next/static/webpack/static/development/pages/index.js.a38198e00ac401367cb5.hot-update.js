webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);


//Configure and create an instance of web3 by finding which provider we will use.
// The goal of this file is to have web3 = new Web3(PROVIDER_WHICH_WE_WILL_FIND)
 // Initialize the web3 variable.

var web3; // To define where we will get the instance of web3 from (server or browser), we need to check whether the code is running on the browser or the server and then, if it is running on the browser, if Metamask exists and is already injecting web3 in the browser.
// We do that by checking if the typeof window is defined. If it is, then it means that a window exists and, as such, that we are in a browser environment.
// If not, it means that we are running outside of a browser and, as such, our code is running on the server.
// In the case that we are not in the browser or Metamask is not running, then we need to setup our own provider, through Infura (which connects us to a node within the ETH network).
//the first condition will check for the existence of a browser. The second condition checks if web3 is in the window (which means Metamask is in place).

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the browser and Metamask is running
  var web3BrowserProvider = window.web3.currentProvider;

  var getProvider =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return web3BrowserProvider.enable();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getProvider() {
      return _ref.apply(this, arguments);
    };
  }();

  getProvider();
  web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3BrowserProvider);
} else {
  // We are not in the browser or Metamask is not running.
  // We need to set up our own provider, using the Rinkeby Eth network, through Infura (using the link that we were provided with).
  var web3ServerProvider = new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/c8d80c1c979446a7b1b3ebe2f3729ec9");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3ServerProvider);
} // const web3 = new Web3(window.web3.currentProvider);


/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=index.js.a38198e00ac401367cb5.hot-update.js.map