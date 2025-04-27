const express = require("express");
const router = express.Router();

router.get("/user/:id/:name", (req, res, next) => {
  const { id, name } = req.body;
  console.log("id: ", id);
  console.log("name: ", name);

  res.status(200);
  res.json({
    message: `Your name is: ${name}`,
  });
});

router.post("/job", (req, res, next) => {
  const { id, name } = req.body;
  // console.log("id: ", id);
  // console.log("name: ", name);

  res.status(200);
  res.json({
    message: `Your name is: ${id}`,
  });
});

module.exports = router;
