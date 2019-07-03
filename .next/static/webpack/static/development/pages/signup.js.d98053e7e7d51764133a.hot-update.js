webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/LoginForm.js":
false,

/***/ "./components/SignUpForm.js":
/*!**********************************!*\
  !*** ./components/SignUpForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUpForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/authentication */ "./services/authentication.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












var SignUpForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUpForm, _Component);

  function SignUpForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUpForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUpForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var email = e.target.email.value;
      var password = e.target.password.value;
      Object(_services_authentication__WEBPACK_IMPORTED_MODULE_9__["login"])(email, password).then(function (resp) {
        _this.props.login(resp.token);
      });
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUpForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        textAlign: "center",
        style: {
          height: "100vh"
        },
        verticalAlign: "middle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        style: {
          maxWidth: 450
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        verticalAlign: "middle",
        src: "https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h2",
        color: "teal",
        textAlign: "center"
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit,
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        name: "firstName",
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "First Name"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        name: "lastName",
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "Last Name"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
        stacked: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        name: "email",
        fluid: true,
        icon: "user",
        iconPosition: "left",
        placeholder: "E-mail address"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        name: "password",
        fluid: true,
        icon: "lock",
        iconPosition: "left",
        placeholder: "Password",
        type: "password"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        color: "teal",
        fluid: true,
        size: "large"
      }, "Login"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], null, "Don't have an account? ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/signup"
      }, "Sign Up"))));
    }
  }]);

  return SignUpForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SignUpForm */ "./components/SignUpForm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);







 // import Background from "../public/background.jpg";
// let sectionStyle = {
//   width: "100%",
//   height: "100vh",
//   backgroundImage: `url(${Background})`,
//   backgroundSize: "cover",
//   BackgroundRepeat: "no-repeat"
// };

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  function Login() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "This ois the signup page"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        login: this.props.login
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=signup.js.d98053e7e7d51764133a.hot-update.js.map