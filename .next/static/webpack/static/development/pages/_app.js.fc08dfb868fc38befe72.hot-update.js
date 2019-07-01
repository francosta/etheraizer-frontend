webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// In this file we will define he different custom routes inside of the application.
// Custom routes will be those which will have custom tokens. All others will work using the default next.js routing system.
// Documentation here: https://github.com/fridays/next-routes
// The first thing we need to do is to require (we need to call the function, as per the docs)
var routes = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js")();

routes.add("/projects/index", "/projects/index");
routes.add("/projects/createproject", "/projects/createproject");
routes.add("/projects/myprofile", "/profile/myprojects");
routes.add("/projects/myprojects", "/projects/myprojects");
routes.add("/projects/:id", "/projects/showproject"); // This export statement will export some helpers to the rest of our project.

module.exports = routes;

/***/ })

})
//# sourceMappingURL=_app.js.fc08dfb868fc38befe72.hot-update.js.map