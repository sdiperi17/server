module.exports = (req, res, next) => {
  //make sure the user is logged in before allowing them into the route.
  if (!req.user) {
    return res.redirect("/");
  }
  next();
};
