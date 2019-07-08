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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);



function ProjectStats(props) {
  var items = [{
    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      style: {
        pointerEvents: "auto"
      },
      href: "https://kovan.etherscan.io/address/".concat(props.selectedProject.blockchain_address)
    }, "Project Blockchain Address"),
    description: "This is the person who created the project"
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
//# sourceMappingURL=showproject.js.e4287c2db2b9ec92ea94.hot-update.js.map