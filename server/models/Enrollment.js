const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String},
  dob: { type: Date, required: true },
  fatherName: { type: String, required: true },
  fatherContact: { type: String, required: true },
  preparationCourse: { type: String, required: true },
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  studentcontact: {type: Number, require: true, unique: true}
});
module.exports = mongoose.model('Enrollment', EnrollmentSchema);
