webpackHotUpdate("static/development/pages/myprofile.js",{

/***/ "./pages/myprofile.js":
/*!****************************!*\
  !*** ./pages/myprofile.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return myprofile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");










var myprofile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(myprofile, _Component);

  function myprofile() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, myprofile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(myprofile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createdProjects", _this.props.userData.createdProjects);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deployedProjects", _this.props.userData.deployedProjects);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fundedProjects", _this.props.userData.fundedProjects);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(myprofile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "huge"
      }, "My Profile"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "large"
      }, "My Projects"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        columns: "three",
        divided: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h2",
        icon: "road",
        content: "Created Projects"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Group, {
        link: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Image, {
        size: "tiny",
        src: "https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Content, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Header, null, "Stevie Feliciano"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Description, null, paragraph))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Image, {
        size: "tiny",
        src: "https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Content, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Header, null, "Veronika Ossi"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item.Description, null, paragraph)))), ".Group>"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h2",
        icon: "plug",
        content: "Deployed Projects"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        as: "h2",
        icon: "star",
        content: "Funded Projects"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        src: "https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
        size: "large"
      }, "Projects I've supported"))));
    }
  }]);

  return myprofile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=myprofile.js.1c45da2a4a87c684ff03.hot-update.js.map