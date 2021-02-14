const mongoose = require("mongoose");
const { Schema } = mongoose;

const errandType = new Schema({
  name: String,
  description: String,
  tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
  stages: [{ type: Schema.Types.ObjectId, ref: "stages" }],
  slug: String
});

mongoose.model("errandTypes", errandType);
