webpackHotUpdate("static/development/pages/projects/showproject.js",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethereum_projectContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/projectContract */ "./ethereum/projectContract.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
















var ContributeForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ContributeForm, _Component);

  function ContributeForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ContributeForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ContributeForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "show", function (dimmer) {
      return function () {
        return _this.setState({
          dimmer: dimmer,
          open: true
        });
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "close", function () {
      return _this.setState({
        open: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleCheck", function () {
      _this.setState({
        terms: !_this.state.terms
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        var contribution, minimumContribution, project, accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                contribution = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(e.target[0].value);
                minimumContribution = _this.props.minimumContribution;
                project = Object(_ethereum_projectContract__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.props.selectedProject.blockchain_address);

                if (!(_this.state.terms === false)) {
                  _context.next = 8;
                  break;
                }

                _this.setState({
                  errorMsg: "You need to accept the terms conditions before creating a project."
                });

                _context.next = 26;
                break;

              case 8:
                if (!(contribution < minimumContribution)) {
                  _context.next = 12;
                  break;
                }

                _this.setState({
                  errorMsg: "Your contribution is below the minimum contribution for this project."
                });

                _context.next = 26;
                break;

              case 12:
                _context.prev = 12;

                _this.setState({
                  contributing: true
                }); //Check units of currency


                _context.next = 16;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.getAccounts();

              case 16:
                accounts = _context.sent;
                _context.next = 19;
                return project.methods.contribute().send({
                  from: accounts[0],
                  value: contribution
                });

              case 19:
                _this.setState({
                  contributing: false,
                  open: false
                });

                _this.createSupportContractinDatabase(_this.props.selectedProject.id, _this.props.userData.id, contribution);

                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](12);

                _this.setState({
                  errorMsg: _context.t0,
                  contributing: false,
                  open: false
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[12, 23]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "createSupportContractinDatabase", function (project_id, user_id, contribution) {
      var projectId = project_id;
      var userId = user_id;
      var contractContribution = contribution;
      var supportContract = {
        user_id: userId,
        project_id: projectId,
        value: contribution
      };
      var supportContractURL = "http://localhost:3000/support_contracts";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(supportContract)
      };
      return fetch(supportContractURL, options).then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        return _this.props.updateDataOnFrontend(contribution);
      });
    });

    _this.state = {
      open: false,
      errorMsg: null,
      terms: false,
      contributing: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          dimmer = _this$state.dimmer;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: this.show("blurring")
      }, "Contribute"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        dimmer: dimmer,
        open: open,
        onClose: this.close,
        centered: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Transition"], {
        visible: this.state.contributing,
        animation: "scale",
        duration: 500
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Dimmer"], {
        active: this.state.contributing
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Loader"], {
        indeterminate: true
      }, "Attempting to send your contribution to the Ethereum blockchain.", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", null), "Please wait..."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"].Header, null, "Make a contribution"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"].Content, {
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
        name: "check circle",
        size: "huge",
        color: "green"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Header"], {
        as: "h2"
      }, this.props.selectedProject.title), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Header"], {
        as: "h3"
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, this.props.selectedProject.description), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"], {
        error: this.state.errorMsg,
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "How much do you want to contribute?"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        name: "contribution",
        placeholder: "Your contribution"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Message"], {
        color: "red",
        size: "small",
        compact: true,
        warning: true,
        error: true,
        header: "Oh oh!",
        content: this.state.errorMsg
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Checkbox"], {
        checked: this.state.terms,
        onChange: this.handleCheck,
        label: "I agree to the Terms and Conditions"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "black",
        onClick: this.close,
        type: "button"
      }, "I changed my mind!"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        positive: true,
        icon: "checkmark",
        labelPosition: "right",
        content: "Contribute!",
        type: "submit"
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Modal"].Actions, null))));
    }
  }]);

  return ContributeForm;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContributeForm);

/***/ })

})
//# sourceMappingURL=showproject.js.873c1d34e1a4766d087c.hot-update.js.map