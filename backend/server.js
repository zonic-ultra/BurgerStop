const express = require("express");
const bodyParser = require("body-parser");
const Router = require("./routes/app");
const path = require("path");

const app = express();
// console.log("path: ", path.join(__dirname, "../frontend/view"));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
// app.use("/User", Router);
const appRoute = require("./routes/app");

//frontend
// app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/view"));
app.use("/static", express.static(path.join(__dirname, "../frontend/static")));

app.use("/", appRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

console.log("test3");
