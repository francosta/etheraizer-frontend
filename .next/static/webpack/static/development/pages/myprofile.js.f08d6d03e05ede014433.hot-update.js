webpackHotUpdate("static/development/pages/myprofile.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function UserProfile(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    columns: two
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], null))));
}

/***/ }),

/***/ "./pages/myprofile.js":
/*!****************************!*\
  !*** ./pages/myprofile.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return myprofile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");












var myprofile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(myprofile, _Component);

  function myprofile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, myprofile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(myprofile).call(this, props));
    _this.state = {
      mySupport: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(myprofile, [{
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
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        size: "huge"
      }, "My Profile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_UserProfile__WEBPACK_IMPORTED_MODULE_10__["default"], {
        userData: this.props.userData
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        size: "large"
      }, "My Projects"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        columns: "three",
        divided: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        as: "h2",
        icon: "road",
        content: "Created Projects"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), this.props.userData.created_projects.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Group, {
        link: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Image, {
        size: "tiny",
        src: this.props.userData.created_projects[this.props.userData.created_projects.length - 1].image
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Header, null, this.props.userData.created_projects[this.props.userData.created_projects.length - 1].title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Description, null, this.props.userData.created_projects[this.props.userData.created_projects.length - 1].description, "}"))), this.props.userData.created_projects.length > 1 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        primary: true
      }, "See More") : null)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        as: "h2"
      }, "No created projects"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "You don't have any created projects."))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        as: "h2",
        icon: "plug",
        content: "Deployed Projects"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), this.props.userData.deployed_projects.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Group, {
        link: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Image, {
        size: "tiny",
        src: this.props.userData.deployed_projects[this.props.userData.deployed_projects.length - 1].image
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Header, null, this.props.userData.deployed_projects[this.props.userData.deployed_projects.length - 1].title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Item"].Description, null, "".concat(this.props.userData.deployed_projects[this.props.userData.deployed_projects.length - 1].description.substring(0, 100)) + "..."))), this.props.userData.deployed_projects.length > 1 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        primary: true
      }, "See More") : null)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        as: "h2"
      }, "No funded projects"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "You don't have any funded projects.")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        as: "h2",
        icon: "heart",
        content: "Project's I've supported"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Group, {
        itemsPerRow: 5
      }, this.state.mySupport.map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: i
        }, project), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          route: "/projects/".concat(project.id)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
          onClick: function onClick() {
            return _this3.props.selectProject(project);
          }
        }, project.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Meta, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "date"
        }, "Goal: ", project.goal)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Description, null, project.description)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Card"].Content, {
          extra: true
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          name: "user"
        }), project.users.length, " supporters")));
      }))));
    }
  }]);

  return myprofile;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=myprofile.js.f08d6d03e05ede014433.hot-update.js.map