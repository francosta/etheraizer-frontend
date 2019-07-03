webpackHotUpdate("static/development/pages/signup.js",{

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

  function SignUpForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUpForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUpForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var firstName = e.target.firstName.value;
      var lastName = e.target.lastName.value;
      var email = e.target.email.value;
      var password = e.target.password.value;
      var passwordConfirmation = e.target.passwordConfirmation.value;
      var newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      };

      if (password === passwordConfirmation) {
        _this.signUp(newUser);
      } else {
        _this.setState({
          error: "The passwords do not match."
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "signUp", function (newUser) {
      debugger;
    });

    _this.state = {
      error: ""
    };
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
      }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit,
        size: "large"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
        inline: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        name: "firstName",
        fluid: true,
        placeholder: "First name"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
        inline: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        name: "lastName",
        fluid: true,
        placeholder: "Last name"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
        inline: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        name: "email",
        fluid: true,
        placeholder: "Email"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
        inline: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        name: "password",
        type: "password",
        fluid: true,
        placeholder: "Password"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
        inline: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        name: "passwordConfirmation",
        type: "password",
        fluid: true,
        placeholder: "Confirm your password"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        color: "red",
        size: "small",
        compact: true,
        warning: true,
        error: true,
        header: "Oh oh!",
        content: this.state.error
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        color: "teal",
        fluid: true,
        size: "large"
      }, "Create an account")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], null, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/login"
      }, "Login"))));
    }
  }]);

  return SignUpForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=signup.js.dfd5610c906a9940102e.hot-update.js.map