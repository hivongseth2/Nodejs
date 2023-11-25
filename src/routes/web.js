const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello12 word");
});

router.get("/luan", (req, res) => {
  res.render("test.ejs");
});

module.exports = router;
