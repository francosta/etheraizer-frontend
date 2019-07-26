webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layouts.js":
/*!*******************************!*\
  !*** ./components/layouts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/index */ "./pages/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  if (props.router.route === "/") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Weather"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "icon",
      href: "https://github.com/francosta/etheraizer-frontend/raw/master/public/%CE%9Etheraizer%20Logo.png"
    })), props.userData.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sticky"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      userData: props.userData,
      logout: props.logout,
      selectProject: props.selectProject
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sticky"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      userData: props.userData,
      logout: props.logout,
      selectProject: props.selectProject
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selectProject: props.selectProject,
      userData: props.userData,
      projects: props.allProjects,
      login: props.login
    }));
  } else {
    return (// We use container in order to limit the size of the elements in the window.
      // We will put the CSS stylesheet link within the head so that it stays in the head of the HTML file.
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      })), props.userData.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sticky"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        userData: props.userData,
        logout: props.logout,
        selectProject: props.selectProject
      }), " ") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sticky"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        userData: props.userData,
        logout: props.logout,
        selectProject: props.selectProject
      }), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null))
    );
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.104018af4f55fdc9f99c.hot-update.js.map