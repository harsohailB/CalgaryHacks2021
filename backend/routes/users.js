
var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");

router.post('/', async function (req, res, next) {
  const { name, age, description, username, password } = req.body;

  const newUser = (await new User({ name, age, description, username, password }).save()).toObject();

  delete newUser.username;
  delete newUser.password;

  res.send(newUser);
});

router.put('/', async function (req, res, next) {
  const { userId, name, age, description, username, password } = req.body;

  const updatedUser = await User.findById(userId);

  updatedUser.name = name;
  updatedUser.age = age;
  updatedUser.description = description;
  updatedUser.username = username;
  updatedUser.password = password;

  await updatedUser.save();

  delete updatedUser.username;
  delete updatedUser.password;

  res.send(updatedUser);
});

module.exports = router;
