const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// MongoDB sema setup
const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Event", eventSchema);
