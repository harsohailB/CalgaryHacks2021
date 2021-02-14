const mongoose = require("mongoose");
const { Schema } = mongoose;

const application = new Schema({
  errand: { type: Schema.Types.ObjectId, ref: "errands" },
  postTime: Date,
  quester: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" }
});

application.plugin(require('mongoose-autopopulate'));

mongoose.model("applications", application);
