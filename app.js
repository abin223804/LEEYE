require("dotenv").config();
const mongoose = require("mongoose");
const route = require("./routes/route.js");
const express = require("express");
const app = express();
const path = require("path");
require("./config/connection").connect();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("views", "./views/user");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static("public/assets"));

app.use("/", route);
app.use("/user", route);

const port = 4000;

app.listen(port, function () {
  console.log("server is listening on port 4000");
});
