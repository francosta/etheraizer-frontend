webpackHotUpdate("static/development/pages/projects/createproject.js",{

/***/ "./pages/projects/createproject.js":
/*!*****************************************!*\
  !*** ./pages/projects/createproject.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createproject; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/factoryContract */ "./ethereum/factoryContract.js");
/* harmony import */ var _components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ProjectCreationProgressComponent */ "./components/ProjectCreationProgressComponent.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_CreateProjectForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/CreateProjectForm */ "./components/CreateProjectForm.js");
/* harmony import */ var _components_DeployProjectForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/DeployProjectForm */ "./components/DeployProjectForm.js");

















var createproject =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(createproject, _Component);

  function createproject(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, createproject);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(createproject).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var accounts, projectTitle, minimumContribution;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

              case 6:
                accounts = _context.sent;
                projectTitle = e.target.projectTitle.value;
                minimumContribution = e.target.minimumContribution.value;
                console.log("Project Title: ".concat(projectTitle));
                console.log("Minimum Contribution: ".concat(minimumContribution));

                _this.setState({
                  creatingProject: true
                });

                _context.prev = 12;
                _context.next = 15;
                return _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_10__["default"].methods.createCampaign(minimumContribution).send({
                  from: accounts[0]
                });

              case 15:
                _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute("/");
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](12);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 21:
                _this.setState({
                  creatingProject: false
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[12, 18]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCheck", function () {
      _this.setState({
        terms: !_this.state.terms
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(createproject, [{
    key: "render",
    //Render the createProject component
    value: function render() {
      if (!this.props.selectedProject.status) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          selectedProject: this.props.selectedProject
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_CreateProjectForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
          handleSubmit: this.handleSubmit,
          errorMessage: this.state.errorMessage,
          handleCheck: this.handleCheck,
          terms: this.state.terms,
          creatingProject: this.state.creatingProject
        }));
      } else if (this.props.selectedProject.status === "created") {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          selectedProject: this.props.selectedProject
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_DeployProjectForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
          handleSubmit: this.handleSubmit,
          errorMessage: this.state.errorMessage,
          handleCheck: this.handleCheck,
          terms: this.state.terms,
          creatingProject: this.state.creatingProject
        }));
      } else return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        selectedProject: this.props.selectedProject
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_DeployProjectForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handleSubmit: this.handleSubmit,
        errorMessage: this.state.errorMessage,
        handleCheck: this.handleCheck,
        terms: this.state.terms,
        creatingProject: this.state.creatingProject
      }));
    }
  }]);

  return createproject;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=createproject.js.4f4bad0f14447e9cf6e7.hot-update.js.map