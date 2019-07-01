webpackHotUpdate("static/development/pages/projects/showproject.js",{

/***/ "./components/ProjectStats.js":
/*!************************************!*\
  !*** ./components/ProjectStats.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function ProjectStats(props) {
  var items = [{
    header: "Project Blockchain Address",
    description: "This is the person who created the project",
    meta: props.manager
  }, {
    header: "Manager's Blockchain Address",
    description: "How much you need to donate to become a supporter",
    meta: props.manager
  }, {
    header: "Minimum Contribution",
    description: "How much you need to donate to become a supporter",
    meta: props.minimumContribution
  }, {
    header: "Amount collected",
    description: "This is how much the project has received",
    meta: props.balance
  }, {
    header: "No. Supporters",
    description: "This is the amuont of people who have contributed to this project" //   meta: props.selectedProject.users.length

  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    centered: true,
    items: items
  });
}

/***/ })

})
//# sourceMappingURL=showproject.js.d3fb4153a4ec10896c09.hot-update.js.map