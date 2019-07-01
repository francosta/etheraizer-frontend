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
}), "16 Friends");

var ProjectCard = function ProjectCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    image: "/images/avatar/large/elliot.jpg",
    header: "Elliot Baker",
    meta: "Friend",
    description: "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.",
    extra: extra
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectIndex; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_factoryContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/factoryContract */ "./ethereum/factoryContract.js");
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layouts */ "./components/layouts.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ProjectCard */ "./components/ProjectCard.js");















var ProjectIndex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectIndex, _Component);

  function ProjectIndex(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProjectIndex);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectIndex).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getProjects", function () {
      var projectsURL = "http://localhost:3000/projects";
      return fetch(projectsURL).then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        return _this.setProjects(resp);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setProjects", function (projects) {
      _this.setState({
        allprojects: projects
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSearch", function (e) {
      var searchTerm = e.target.value.toLowerCase();

      _this.setState({
        searchTerm: searchTerm
      });

      var newProjects = _this.state.allprojects.filter(function (project) {
        return project.title.toLowerCase().includes(_this.state.searchTerm);
      });

      _this.setState({
        filteredProjects: newProjects
      });
    });

    _this.state = {
      allprojects: [],
      searchTerm: "",
      filteredProjects: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProjects();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Homepage"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "These are addresses of all the projects deployed into smart contracts:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui vertical menu left floated"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui input"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        onChange: this.handleSearch,
        type: "text",
        placeholder: "Search..."
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, "Home", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "active item"
      }, "Search"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "grid layout icon"
      }), " Browse"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, "Messages"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui dropdown item"
      }, "More", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "dropdown icon"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "edit icon"
      }), " Edit Profile"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "globe icon"
      }), " Choose Language"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "settings icon"
      }), " Account Settings")))), this.state.allprojects.map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i
        }, project));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null));
    }
  }]);

  return ProjectIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=projects.js.c22893268993f6a80cc8.hot-update.js.map