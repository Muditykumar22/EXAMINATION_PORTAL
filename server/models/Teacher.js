const mongoose = require('mongoose');
const TeacherSchema = new mongoose.Schema({
  facultyName: String,
  facultyID: { type: String, unique: true },
  password: String,
  role: String,
  subjects: [String]
});
module.exports = mongoose.model('Teacher', TeacherSchema);
