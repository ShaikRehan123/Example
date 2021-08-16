const express = require("express");

const app = express();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
app.get("/", (request, response) => {
  response.redirect("/gadgets");
});
app.listen(3000, () => {
  console.log("Listening On Port 2000");
});

module.exports = app;
