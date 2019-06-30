webpackHotUpdate("static/development/pages/projects/createproject.js",{

/***/ "./components/ProjectDetails.js":
/*!**************************************!*\
  !*** ./components/ProjectDetails.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ProjectDetails(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Image, {
    size: "small",
    src: "https://react.semantic-ui.com/images/wireframe/image.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Header, {
    as: "a"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Description, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.selectedProject.description)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Image, {
    size: "small",
    src: "https://react.semantic-ui.com/images/wireframe/image.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Header, {
    as: "a"
  }, "Blockchain Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Description, {
    content: props.selectedProject.blockchain_address
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Image, {
    size: "small",
    src: "https://react.semantic-ui.com/images/wireframe/image.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item.Content, {
    header: "Goal",
    description: props.selectedProject.goal
  })));
}

/***/ }),

/***/ "./pages/projects/showproject.js":
/*!***************************************!*\
  !*** ./pages/projects/showproject.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowProject; });
/* harmony import */ var _components_ProjectProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ProjectProgress */ "./components/ProjectProgress.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AchieveProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AchieveProjectForm */ "./components/AchieveProjectForm.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_ProjectDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProjectDetails */ "./components/ProjectDetails.js");





function ShowProject(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProjectProgress__WEBPACK_IMPORTED_MODULE_0__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Project Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, props.selectedProject.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProjectDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedProject: this.props.selectedProject
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit"
  }, "Edit Project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AchieveProjectForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedProject: props.selectedProject,
    selectProject: props.selectProject
  }));
}

/***/ })

})
//# sourceMappingURL=createproject.js.d77cdb7dff93791f0c50.hot-update.js.map