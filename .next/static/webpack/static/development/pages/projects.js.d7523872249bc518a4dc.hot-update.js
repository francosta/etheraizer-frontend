webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectIndex; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ethereum/factoryContract */ "./ethereum/factoryContract.js");
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layouts */ "./components/layouts.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);













var ProjectIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProjectIndex, _Component);

  function ProjectIndex() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderProjects", function () {
      var items = _this.props.allProjects.map(function (project) {
        return {
          image: "https://drive.google.com/uc?id=1l-c_jyMF1elbZKIeemM-vaFL-eRqd9xH",
          header: project.title,
          description: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            route: "/projects/".concat(project.id)
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "View Project")),
          fluid: false
        };
      });

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Card"].Group, {
        selectProject: _this.props.selectProject,
        items: items
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectIndex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Homepage"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "These are addresses of all the projects deployed into smart contracts:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ui vertical menu left floated"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ui input"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        placeholder: "Search..."
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "item"
      }, "Home", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "active item"
      }, "Search"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "grid layout icon"
      }), " Browse"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, "Messages"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ui dropdown item"
      }, "More", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "dropdown icon"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "edit icon"
      }), " Edit Profile"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "globe icon"
      }), " Choose Language"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "settings icon"
      }), " Account Settings")))), this.renderProjects(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null));
    }
  }]);

  return ProjectIndex;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=projects.js.d7523872249bc518a4dc.hot-update.js.map