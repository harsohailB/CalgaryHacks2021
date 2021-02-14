var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Tag = mongoose.model("tags");

const createTag = async (text) => {
  const tagInfo = {
    text,
    slug: typeof text === 'string' ? text.toLowerCase().replace(' ', '-') : text
  };

  const newTag = await new Tag(tagInfo).save();
  return newTag;
}

router.get('/all', async function (req, res, next) {
  const allTags = await Tag.find({});

  res.send(allTags);
});

router.post("/", async function (req, res, next) {
  const newTag = await createTag(req.body.text);
  res.send(newTag);
});

module.exports = { router, createTag };
