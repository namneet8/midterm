const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userStoriesSchema = new Schema({
  title: String,
  description: String,
  priority: Number,
  category: String,
});

module.exports = mongoose.model("UserStories", userStoriesSchema);