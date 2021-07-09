const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
  Score: String,
  Cost: Number,
  date: String
});

module.exports = Expenses = mongoose.model("expenses", expensesSchema);