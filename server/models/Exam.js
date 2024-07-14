const mongoose = require('mongoose');
const ExamSchema = new mongoose.Schema({
  department: String,
  course: String,
  subject: String,
  nameOfExam: String,
  semesterNo: Number,
  questions: [
    {
      questionText: String,
      options: String,
      answer: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Exam', ExamSchema);