webpackHotUpdate("static/development/pages/projects.js",{

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

routes / add("/projects/index", "/projects/showproject");
routes.add("/projects/:id", "/projects/showproject"); // This export statement will export some helpers to the rest of our project.

module.exports = routes;

/***/ })

})
//# sourceMappingURL=projects.js.c64d8a2b282b86ff9ae9.hot-update.js.map