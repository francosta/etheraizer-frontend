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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ProjectCreationProgressComponent */ "./components/ProjectCreationProgressComponent.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_CreateProjectForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CreateProjectForm */ "./components/CreateProjectForm.js");
/* harmony import */ var _components_DeployProjectForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/DeployProjectForm */ "./components/DeployProjectForm.js");
/* harmony import */ var _projects_showproject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../projects/showproject */ "./pages/projects/showproject.js");












var createproject =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(createproject, _Component);

  function createproject() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, createproject);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(createproject).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(createproject, [{
    key: "render",
    //Render the createProject component
    value: function render() {
      if (!this.props.selectedProject.status) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            marginTop: "20px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
          selectedProject: this.props.selectedProject
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CreateProjectForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          userData: this.props.userData,
          selectProject: this.props.selectProject,
          updateCreatedProjectsOnFrontend: this.props.updateCreatedProjectsOnFrontend
        }));
      } else if (this.props.selectedProject.status === "created") {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            marginTop: "20px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ProjectCreationProgressComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
          selectedProject: this.props.selectedProject
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_DeployProjectForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
          selectedProject: this.props.selectedProject,
          getNewProjectBlockchainAddress: this.props.getNewProjectBlockchainAddress,
          blockchainProjects: this.props.blockchainProjects,
          selectProject: this.props.selectProject,
          addProjectToAllProjects: this.props.deployProject
        }));
      } else if (this.props.selectedProject.status === "deployed") {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            marginTop: "20px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_projects_showproject__WEBPACK_IMPORTED_MODULE_10__["default"], {
          selectedProject: this.props.selectedProject,
          getNewProjectBlockchainAddress: this.props.getNewProjectBlockchainAddress,
          blockchainProjects: this.props.blockchainProjects,
          selectProject: this.props.selectProject,
          userData: this.props.userData
        }));
      }
    }
  }]);

  return createproject;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=createproject.js.00147c764e3bb60aca05.hot-update.js.map