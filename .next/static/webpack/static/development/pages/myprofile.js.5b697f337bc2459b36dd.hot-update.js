webpackHotUpdate("static/development/pages/myprofile.js",{

/***/ "./components/UserProfileEditForm.js":
/*!*******************************************!*\
  !*** ./components/UserProfileEditForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfileEditForm; });
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










var UserProfileEditForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UserProfileEditForm, _Component);

  function UserProfileEditForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProfileEditForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProfileEditForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var newFirstName;
      var newLastName;
      var newEmail;
      var newPassword;
      var newPasswordConfirmation;

      if (e.target.firstName.value === "") {
        newFirstName = _this.props.userData.first_name;
      } else {
        newFirstName = e.target.firstName.value;
      }

      if (e.target.lastName.value === "") {
        newLastName = _this.props.userData.last_name;
      } else {
        newLastName = e.target.lastName.value;
      }

      newEmail = e.target.email.value;
      newPassword = e.target.password.value;
      newPasswordConfirmation = e.target.passwordConfirmation.value;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProfileEditForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "firstName",
        placeholder: this.props.userData.first_name
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "lastName",
        placeholder: this.props.userData.last_name
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "email",
        placeholder: this.props.userData.email
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "New Password"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "password",
        type: "password"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "New Password Confirmation"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "passwordConfirmation",
        type: "password"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit"
      }, "Edit Profile"));
    }
  }]);

  return UserProfileEditForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=myprofile.js.5b697f337bc2459b36dd.hot-update.js.map