webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var extra = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  name: "user"
}), "No. Supporters: 17");

var ProjectCard = function ProjectCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    image: "https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH",
    header: props.title,
    meta: "Status: ".concat(props.status.charAt(0).toUpperCase()),
    description: props.description,
    extra: extra
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ })

})
//# sourceMappingURL=projects.js.619912777ce80852da3d.hot-update.js.map