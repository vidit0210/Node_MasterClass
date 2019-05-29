const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express App", heading: "Welcome" });
});

module.exports = router;
