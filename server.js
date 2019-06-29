// This file is meant to set up the next-routes library for dynamic routing. It works in conjunction with routes.js
// The documentation for this library can be found at https://github.com/fridays/next-routes.

// Specifically, this file makes sure that we manually boot up the application and specifically tell it to use the routes.js file.

const next = require("next");
const routes = require("./routes"); // Require routes.js
const app = next({ dev: process.env.NODE_ENV !== "production" }); // The dev key specifies the environment we are running our app in: production or development.
const handler = routes.getRequestHandler(app); //

// Because we are not using express (it would be diffrent if we were - check docs) we createServer in the following way.
// We are goining to set up the app and tell it to learn to a specific port.
const { createServer } = require("http");
app.prepare().then(() => {
  createServer(handler).listen(3000, error => {
    if (error) throw error;
    console.log("The app is ready on localhost:3000");
  });
});

// After this we need to change the default dev script on package.json.
// We changed this from 'next dev' in order to have the app boot the development environment from server.js instead of the default.
