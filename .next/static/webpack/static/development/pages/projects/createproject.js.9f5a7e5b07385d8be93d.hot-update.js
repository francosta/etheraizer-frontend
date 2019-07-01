webpackHotUpdate("static/development/pages/projects/createproject.js",{

/***/ "./components/DeployProjectForm.js":
/*!*****************************************!*\
  !*** ./components/DeployProjectForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeployProjectForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/factoryContract */ "./ethereum/factoryContract.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");















var DeployProjectForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DeployProjectForm, _Component);

  function DeployProjectForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DeployProjectForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(DeployProjectForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleCheck", function () {
      _this.setState({
        terms: !_this.state.terms
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        var accounts, projectTitle, minimumContribution;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.persist();
                e.preventDefault();

                if (!(_this.state.terms === false)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", _this.setState({
                  errorMessage: "You need to accept the terms conditions before creating a project."
                }));

              case 4:
                _context.next = 6;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 6:
                accounts = _context.sent;
                projectTitle = e.target.projectTitle.value;
                minimumContribution = e.target.minimumContribution.value;

                _this.setState({
                  creatingProject: true
                });

                _context.prev = 10;
                _context.next = 13;
                return _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_12__["default"].methods.createCampaign(minimumContribution).send({
                  from: accounts[1],
                  gas: "1000000"
                }).then(function (resp) {
                  return console.log(resp);
                });

              case 13:
                _this.getAddressForNewProject();

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](10);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 19:
                _this.setState({
                  creatingProject: false
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[10, 16]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getAddressForNewProject",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var addresses, selectedProjectAddress, project;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getDeployedCampaigns().call();

            case 2:
              addresses = _context2.sent;
              selectedProjectAddress = addresses[addresses.length - 1];
              project = this.props.selectedProject;
              project.blockchain_address = selectedProjectAddress;
              project.status = "deployed";
              this.props.selectProject(project);
              this.updateProjectOnDatabase(project);
              this.props.addProjectToAllProjects(project);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "updateProjectOnDatabase", function (project) {
      var updateURL = "http://localhost:3000/projects/".concat(project.id);
      var options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(project)
      };
      return fetch(updateURL, options).then(function (resp) {
        return resp.json();
      });
    });

    _this.state = {
      errorMessage: "",
      creatingProject: false,
      terms: false,
      projectStatus: "funded"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DeployProjectForm, [{
    key: "render",
    value: function render() {
      var formOptions = [{
        key: "wei",
        text: "wei",
        value: "wei"
      }, {
        key: "ether",
        text: "Ξ ether",
        value: "ether"
      }];
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Deploy your project to the Blockchain"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Your project was created. Now, deploy it to the blockchain."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", null, "Please fill in the form below to deploy your project:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Transition"], {
        visible: this.state.creatingProject,
        animation: "scale",
        duration: 500
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dimmer"], {
        active: this.state.creatingProject
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Loader"], {
        indeterminate: true
      }, "Attempting to deploy project's contract into the Ethereum blockchain.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "Please wait..."))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.handleSubmit,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        disabled: true,
        name: "projectTitle"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, "Project Title"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        name: "projectTitle",
        value: this.props.selectedProject.title
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, "Minimum Contribution"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        name: "minimumContribution",
        label: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], {
          defaultValue: "wei",
          options: formOptions
        }),
        labelPosition: "right",
        placeholder: "Minimum Contribution"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
        checked: this.state.terms,
        onChange: this.handleCheck,
        label: "I agree to the Terms and Conditions"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
        color: "red",
        size: "small",
        compact: true,
        warning: true,
        error: true,
        header: "Oh oh!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        type: "submit"
      }, "Create Project")))));
    }
  }]);

  return DeployProjectForm;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=createproject.js.9f5a7e5b07385d8be93d.hot-update.js.map