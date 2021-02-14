
var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");

router.post('/', async function (req, res, next) {
  const { name, age, description, username, password } = req.body;

  const newUser = (await new User({ name, age, description, username, password }).save()).toObject();

  delete newUser.username;
  delete newUser.password;

  console.log(typeof newUser, { newUser }, newUser.username, newUser.password)

  res.send(newUser);
});

module.exports = router;
