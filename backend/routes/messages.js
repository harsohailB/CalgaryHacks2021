var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Message = mongoose.model("messages");

/* GET home page. */
router.get("/all", async function (req, res, next) {
  const {
    userId
  } = req.body;

  const messages = await Message.find({ recipient: userId });

  res.send(messages);
});

module.exports = router;