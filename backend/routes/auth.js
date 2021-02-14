var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const { username, password } = req.query;

  const user = await User.findOne({ username, password });
  if (!user.length) {
    res.status(401).send({ error: "Login failed" });
  }
  res.send(user);
});

module.exports = router;
