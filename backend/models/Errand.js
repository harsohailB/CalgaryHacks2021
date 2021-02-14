const mongoose = require("mongoose");
const { Schema } = mongoose;

const errand = new Schema({
  name: String,
  description: String,
  postTime: Date,
  expiryTime: Date,
  startTime: Date,
  endTime: Date,
  price: Number,
  poster: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
  quester: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
  review: { type: Schema.Types.ObjectId, ref: "reviews", autopopulate: "true" },
  tags: [{ type: Schema.Types.ObjectId, ref: "tags", autopopulate: "true" }],
  messageThread: {
    type: Schema.Types.ObjectId,
    ref: "messagethreads",
    autopopulate: "true",
  },
  status: {
    type: String,
    enum: ["AVAILABLE", "ACCEPTED", "IN_PROGRESS", "COMPLETED"],
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "errandTypes",
    autopopulate: "true",
  },
  currentStageIdx: { type: Number, default: 0 },
  applications: [
    { type: Schema.Types.ObjectId, ref: "applications", autopopulate: "true" },
  ],
  address: {
    type: Schema.Types.ObjectId,
    ref: "addresses",
    autopopulate: "true ",
    default: null,
  },
});

errand.plugin(require("mongoose-autopopulate"));

mongoose.model("errands", errand);
