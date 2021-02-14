var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Errand = mongoose.model("errands");
const MessageThread = mongoose.model("messageThreads");

/* GET home page. */
router.post("/", async function (req, res, next) {
  const {
    posterId,
    name,
    description,
    expiryTime,
    startTime,
    endTime,
  } = req.body;

  const messageThread = await new MessageThread().save();

  const errandInfo = {
    name,
    description,
    expiryTime: expiryTime ? new Date(expiryTime) : null,
    startTime: startTime ? new Date(startTime) : null,
    endTime: endTime ? new Date(endTime) : null,
    poster: posterId,
    messageThread: messageThread._id,
    status: "AVAILABLE",
  };

  const result = await new Errand(errandInfo).save();
  const newErrand = await result.populate('poster').populate('messageThread').execPopulate();

  res.send(newErrand);
});

router.get("/poster/all", async function (req, res, next) {
  const { posterId } = req.body;

  const errands = await Errand.find({ poster: posterId })
    .populate("poster")
    .populate("quester")
    .populate("review");

  res.send({ errands });
});

router.get("/poster", async function (req, res, next) {
  const { posterId, status } = req.body;

  const params = { poster: posterId };
  if (status) params.status = status;

  console.log({ params });

  const errands = await Errand.find(params)
    .populate("poster")
    .populate("quester")
    .populate("review");

  res.send({ errands });
});

router.get("/quester", async function (req, res, next) {
  const { questerId, status } = req.body;

  const params = { quester: questerId };
  if (status) params.status = status;

  console.log({ params });

  const errands = await Errand.find(params)
    .populate("poster")
    .populate("quester")
    .populate("review");

  res.send({ errands });
});

module.exports = router;
