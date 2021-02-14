const mongoose = require("mongoose");
const { Schema } = mongoose;

const errandType = new Schema({
  name: String,
  description: String,
  tags: [{ type: Schema.Types.ObjectId, ref: "tags", autopopulate: "true" }],
  stages: [{ type: Schema.Types.ObjectId, ref: "errandStages", autopopulate: "true" }],
  slug: String
});

errandType.plugin(require('mongoose-autopopulate'));

mongoose.model("errandTypes", errandType);
