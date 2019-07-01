webpackHotUpdate("static/development/pages/projects/showproject.js",{

/***/ "./pages/projects/showproject.js":
/*!***************************************!*\
  !*** ./pages/projects/showproject.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowProject; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _components_ProjectProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ProjectProgress */ "./components/ProjectProgress.js");
/* harmony import */ var _components_AchieveProjectForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AchieveProjectForm */ "./components/AchieveProjectForm.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_ProjectDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ProjectDetails */ "./components/ProjectDetails.js");
/* harmony import */ var _ethereum_projectContract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ethereum/projectContract */ "./ethereum/projectContract.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ProjectStats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/ProjectStats */ "./components/ProjectStats.js");
/* harmony import */ var _components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/ProjectCreationProgressComponent */ "./components/ProjectCreationProgressComponent.js");
/* harmony import */ var _components_ProjectHighLevelValues__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/ProjectHighLevelValues */ "./components/ProjectHighLevelValues.js");





















var ShowProject =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ShowProject, _Component);

  // static async getInitialProps(props) {
  //   console.log(props);
  //   return {};
  // }
  function ShowProject(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ShowProject);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ShowProject).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var web3, address, project, stats;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              web3 = web3;
              address = this.props.selectedProject.blockchain_address;
              project = Object(_ethereum_projectContract__WEBPACK_IMPORTED_MODULE_15__["default"])(address);
              _context.next = 5;
              return project.methods.getSummary().call();

            case 5:
              stats = _context.sent;
              this.setState({
                minimumContribution: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(stats[0]["_hex"]),
                balance: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(stats[1]["_hex"]),
                requestsCount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(stats[2]["_hex"]),
                approversCount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(stats[3]["_hex"]),
                managerAddress: stats[4]
              });
              console.log(stats);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleClick", function () {
      _this.setState({
        edit: !_this.state.edit
      });
    });

    _this.state = {
      edit: false,
      minimumContribution: null,
      balance: null,
      requestsCount: null,
      approversCount: null,
      managerAddress: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ShowProject, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Project Name: ".concat(this.props.selectedProject.title)), this.props.selectedProject.user_id === this.props.userData.id ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_18__["default"], {
        selectedProject: this.props.selectedProject
      }) : null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ProjectProgress__WEBPACK_IMPORTED_MODULE_11__["default"], {
        goal: this.props.selectedProject.goal,
        progress: this.props.selectedProject.progress
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ProjectHighLevelValues__WEBPACK_IMPORTED_MODULE_19__["default"], {
        balance: this.state.balance,
        goal: this.props.selectedProject.goal,
        noSupporters: this.props.selectedProject.users
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ProjectStats__WEBPACK_IMPORTED_MODULE_17__["default"], {
        selectedProject: this.props.selectedProject,
        minimumContribution: this.state.minimumContribution,
        manager: this.state.managerAddress,
        balance: this.state.balance,
        requestsCount: this.state.requestsCount,
        approversCount: this.state.approversCount
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), !this.state.edit ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, this.props.selectedProject.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ProjectDetails__WEBPACK_IMPORTED_MODULE_14__["default"], {
        selectedProject: this.props.selectedProject
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: this.handleClick,
        type: "submit"
      }, "Edit Project"), " ") : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AchieveProjectForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        active: this.state.edit,
        selectedProject: this.props.selectedProject,
        selectProject: this.props.selectProject,
        changeEdit: this.handleClick
      })));
    }
  }]);

  return ShowProject;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=showproject.js.2a5c72f8f6695f9cedbe.hot-update.js.map