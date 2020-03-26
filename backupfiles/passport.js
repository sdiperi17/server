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

//passport enters token into the user's cookie
//once the user decides that they want to make some type of follow up request to the server, they will make http request
//from the browser to the server and when they make that request the cookie will be automatically added in the request by the browser
// passport takes that identifying information from the cookie and pass it into deserialiseUser

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
    //and it doesn't reflect in our Mongo database and that's why we ne need to call method called save()
    async (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);

      //creates new model instance of user/
      //when we create new model instance/record  using Mongoose it doesn't automatically persist/save it into database
      //   new User({ googleId: profile.id }).save();
      //   const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
