const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//pull the Schema/Model out we pass one argument into => mongoose.model("collectionName")
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  console.log("PASSPORT USER", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    //2nd argument in callback function which will be automatically called any time user is redirected back to our application from the Google flow
    async (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);

      //check if user already exist in db
      //anytime we access our Mongo database no matter what it is, it is always asynchronous action
      //and we have to assume that it returns a promise that will be resolved with the given user ID is found
      const existingUser = await User.findOne({ googleId: profile.id });

      //if it already exist then just return user data obj and skip user creation
      if (existingUser) {
        return done(null, existingUser);
      }

      // if user doesn't exist then create a user in db
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
