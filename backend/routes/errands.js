var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Errand = mongoose.model("errands");
const ErrandType = mongoose.model("errandTypes");
const MessageThread = mongoose.model("messageThreads");
const Review = mongoose.model("review");

/* GET home page. */
router.post("/", async function (req, res, next) {
  const {
    posterId,
    name,
    description,
    expiryTime,
    startTime,
    endTime,
    errandType
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
    type: errandType
  };

  const result = await new Errand(errandInfo).save();
  const newErrand = await result.populate('poster').populate('messageThread').execPopulate();

  res.send(newErrand);
});

router.post("/", async function(req, res, next) {
  const {postTime, rating, body} = req.body;
  const newReview = (await new Review({postTime, rating, body}).save()).toObject();

  res.send(newReview);
})

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

  const errands = await Errand.find(params)
    .populate("poster")
    .populate("quester")
    .populate("review");

  res.send({ errands });
});

router.get("/types", async function (req, res, next) {
  new ErrandType({ name: 'Test' }).save();

  const types = await ErrandType.find({ name: 'Delivery' })

  res.send({ errandTypes: types });
});

module.exports = router;
