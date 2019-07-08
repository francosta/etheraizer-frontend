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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.js");












var myprofile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(myprofile, _Component);

  function myprofile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, myprofile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(myprofile).call(this, props));
    _this.state = {
      mySupport: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(myprofile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var myContracts = this.props.supportContracts.filter(function (contract) {
        return contract.user_id === _this2.props.userData.id;
      });
      var myProjects = myContracts.map(function (contract) {
        return _this2.props.allProjects.filter(function (project) {
          return contract.project_id === project.id;
        });
      }).flat();
      this.setState({
        mySupport: myProjects
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        size: "huge"
      }, "My Profile"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {
        userData: this.props.userData
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        size: "large"
      }, "My Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        columns: "three",
        divided: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h2",
        icon: "road",
        content: "Created Projects"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), this.props.userData.created_projects.length > 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Group, {
        link: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Image, {
        size: "tiny",
        src: this.props.userData.created_projects[this.props.userData.created_projects.length - 1].image
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Header, null, this.props.userData.created_projects[this.props.userData.created_projects.length - 1].title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Description, null, this.props.userData.created_projects[this.props.userData.created_projects.length - 1].description, "}"))), this.props.userData.created_projects.length > 1 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        primary: true
      }, "See More") : null)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h2"
      }, "No created projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "You don't have any created projects."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h2",
        icon: "plug",
        content: "Deployed Projects"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), this.props.userData.deployed_projects.length > 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Group, {
        link: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Image, {
        size: "tiny",
        src: this.props.userData.deployed_projects[this.props.userData.deployed_projects.length - 1].image
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Header, null, this.props.userData.deployed_projects[this.props.userData.deployed_projects.length - 1].title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Description, null, "".concat(this.props.userData.deployed_projects[this.props.userData.deployed_projects.length - 1].description.substring(0, 100)) + "..."))), this.props.userData.deployed_projects.length > 1 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        primary: true
      }, "See More") : null)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h2"
      }, "No funded projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "You don't have any funded projects.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h2",
        icon: "heart",
        content: "Project's I've supported"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
        itemsPerRow: 5
      }, this.state.mySupport.map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: i,
          project: project
        });
      }))));
    }
  }]);

  return myprofile;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=myprofile.js.4b0148476071d39c7d62.hot-update.js.map