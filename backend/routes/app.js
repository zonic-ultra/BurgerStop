const express = require("express");
const router = express.Router();

router.get("/app", (req, res, next) => {
  res.render("index");
  // const { id, name } = req.body;
  // console.log("id: ", id);
  // console.log("name: ", name);
  // res.status(200);
  // res.json({
  //   message: `Your name is: ${name}`,
  // });
});

// router.post("/job", (req, res, next) => {
//   try {
//     const { id, name } = req.query;
//     // throw Error();

//     res.status(200).json({
//       message: "Your request success",
//       data: id,
//       name,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Your request failed",
//     });
//   }
// });

module.exports = router;
