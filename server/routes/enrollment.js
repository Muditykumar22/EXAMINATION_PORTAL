const express = require('express');
const Enrollment = require('../models/Enrollment');
const router = express.Router();

// Enroll a student
router.post('/login', async (req, res) => {
  console.log('reached', req.body);
  const { username, password } = req.body;
  console.log(username,password);
  console.log('Login attempt:', { username, password });
  try {
    const student = await Student.findOne({ username });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
   // const isMatch = await bcrypt.compare(password, student.password);
   const isMatch = password===student.password;
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: student._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, student });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/register', async (req, res) => {
  
  console.log('reached', req.body);
  const { name, address, email, dob, fatherName, fatherContact, preparationCourse, username, password, studentcontact } = req.body;

  try {
      const newStudent = new Student({
          name,
          address,
          email,
          dob,
          fatherName,
          fatherContact,
          preparationCourse,
          username,
          password,
          studentcontact
      });

      await newStudent.save();
      res.status(201).json({ message: 'Student registered successfully', student: newStudent });
  } catch (error) {
    console.log(error.message)
      res.status(400).json({ message: 'Failed to register student', error: error.message });
  }
});
// Other enrollment routes...

module.exports = router;
