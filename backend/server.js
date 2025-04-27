const express = require("express");
const bodyParser = require("body-parser");
const Router = require("./routes/index");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use("/User", Router);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

console.log("test3");
