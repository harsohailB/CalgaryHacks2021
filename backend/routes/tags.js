var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Tag = mongoose.model("tags");

router.get('/all', async function (req, res, next) {
  const allTags = await Tag.find({});

  res.send(allTags);
});

router.post("/", async function (req, res, next) {
  const {
    text
  } = req.body;

  const tagInfo = {
    text,
    slug: typeof text === 'string' ? text.toLowerCase().replace(' ', '-') : text
  };

  const newTag = await new Tag(tagInfo).save();

  res.send(newTag);
});

module.exports = router;
