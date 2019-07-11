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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");











var UserProfileEditForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UserProfileEditForm, _Component);

  function UserProfileEditForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserProfileEditForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProfileEditForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var user;
      var newFirstName;
      var newLastName;
      var newEmail;

      if (e.target.password.value !== "" && e.target.password.value !== e.target.passwordConfirmation.value) {
        _this.setState({
          error: "The passwords do not match"
        });

        return null;
      }

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

      if (e.target.email.value === "") {
        newEmail = _this.props.userData.email;
      } else {
        newEmail = e.target.email.value;
      }

      if (e.target.password.value !== "") {
        user = {
          first_name: newFirstName,
          last_name: newLastName,
          email: newEmail,
          password: e.target.password.value
        };
      } else {
        user = {
          first_name: newFirstName,
          last_name: newLastName,
          email: newEmail
        };
      }

      var editUserURL = "http://localhost:3000/users/".concat(_this.props.userData.id);
      var options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          user: user
        })
      };
      return fetch(editUserURL, options).then(function (resp) {
        resp.json();

        _this.props.updateUserData(newFirstName, newLastName, newEmail);

        _this.props.editProfile();
      });
    });

    _this.state = {
      error: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserProfileEditForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        name: "firstName",
        placeholder: this.props.userData.first_name
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        name: "lastName",
        placeholder: this.props.userData.last_name
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        name: "email",
        placeholder: this.props.userData.email
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        widths: "equal"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Message"], {
        visible: this.state.error,
        error: true,
        content: "The passwords do not match."
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit"
      }, "Edit Profile"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.props.editProfile
      }, "Cancel"));
    }
  }]);

  return UserProfileEditForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=myprofile.js.0cf9fa86bf2d13f2941b.hot-update.js.map