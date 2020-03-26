const passport = require("passport");

module.exports = app => {
  // when user clicks login, the user is redirected to below route to allow user sign in with gmail account
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // after the user authenticated with Google, google strategy is run and
  // passport attaches user credentials to req.user object
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // console.log("look what the deseralize user function did@");
      console.log(req.user);
      res.redirect("/");
    }
  );

  // this route is to check if there is user session
  app.get("/auth/current_user", (req, res) => {
    // console.log("USER", user);
    res.json(req.user);
  });

  app.get("/auth/logout", (req, res) => {
    // logout() is a function that is attached automatically to the request object by passport
    // it takes the cookie that contains our users ID and it kills the ID
    req.logout();

    res.redirect("/");
  });
};
