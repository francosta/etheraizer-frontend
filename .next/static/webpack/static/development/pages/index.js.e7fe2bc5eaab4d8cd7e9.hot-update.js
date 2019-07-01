webpackHotUpdate("static/development/pages/index.js",{

/***/ "./services/authentication.js":
/*!************************************!*\
  !*** ./services/authentication.js ***!
  \************************************/
/*! exports provided: login, validate, getUserData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

var login = function login(loginEmail, loginPassword) {
  var baseURL = "http://localhost:3000";
  var loginURL = baseURL + "/login";
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      email: loginEmail,
      password: loginPassword
    })
  };
  return fetch(loginURL, options).then(function (resp) {
    return resp.json();
  });
};
var validate = function validate() {
  return fetch("http://localhost:3000/validate", {
    headers: {
      Authorisation: localStorage.token
    }
  }).then(function (resp) {
    return resp.json();
  });
};
var getUserData = function getUserData() {
  return fetch("http://localhost:3000/user_data", {
    headers: {
      Authorisation: localStorage.token
    }
  }).then(function (resp) {
    return resp.json();
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  login: login,
  validate: validate,
  getUserData: getUserData
});

/***/ })

})
//# sourceMappingURL=index.js.e7fe2bc5eaab4d8cd7e9.hot-update.js.map