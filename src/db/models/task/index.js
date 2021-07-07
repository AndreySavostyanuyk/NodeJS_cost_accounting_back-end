const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: String,
  text2: String,
  date: { type: Date, default: Date.now }
});

module.exports = Task = mongoose.model("tasks", taskSchema);