//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys!!!
  module.exports = require("./dev");
}

// *********
// When you deploy your server to Heroku there is an existing environment variable called NODE_ENV
//NODE_ENV tells us whether or not we are running in a production environment

// *****
//Commit keys.js so app knows what to do in dev or prod
