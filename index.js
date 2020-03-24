const express = require("express");
const app = express();

//route handler
app.get("/", (req, res) => {
  res.send("Hello Saida");
});

const PORT = process.env.PORT || 5000;

// tells express to tell node that it wants to listen for incoming traffic 5000
app.listen(5000);
