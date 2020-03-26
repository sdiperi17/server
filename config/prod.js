//prod.js - production keys here !!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY,
  mongoURI: process.env.MONGO_URI
};

// *******
// By convention we usually list out environment variable with all capitals and underscore between each word
