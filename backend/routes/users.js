
var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");

/* GET home page. */
router.post('/', async function (req, res, next) {
  const { id, name, age, description } = req.body;

  const newUser = await new User({ id, name, age, description }).save();

  res.send(newUser);
});

module.exports = router;
