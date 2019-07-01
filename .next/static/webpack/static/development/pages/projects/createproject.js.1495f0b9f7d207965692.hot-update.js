webpackHotUpdate("static/development/pages/projects/createproject.js",{

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
    meta: props.selectedProject.blockchain_address
  }, {
    header: "Manager's Blockchain Address",
    description: "How much you need to donate to become a supporter",
    meta: props.manager
  }, {
    header: "Minimum Contribution",
    description: "How much you need to donate to become a supporter",
    meta: props.minimumContribution
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    centered: true,
    items: items
  });
}

/***/ })

})
//# sourceMappingURL=createproject.js.1495f0b9f7d207965692.hot-update.js.map