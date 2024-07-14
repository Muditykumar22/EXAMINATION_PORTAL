// models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  answer: String
});

module.exports = mongoose.model('Question', QuestionSchema);
