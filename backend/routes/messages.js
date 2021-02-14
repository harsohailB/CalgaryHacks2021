var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Message = mongoose.model("messages");

/* GET home page. */
router.get("/all", async function (req, res, next) {
  const {
    userId
  } = req.query;

  const messages = await Message.find({ recipient: userId }).sort({ time: -1 }).populate('errand', 'name _id').populate('author');

  console.log(messages.length ? messages[0] : null);

  res.send(messages);
});

module.exports = router;