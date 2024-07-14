const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const teacherRouter = express.Router();

// Teacher login
teacherRouter.post('/login', async (req, res) => {
  console.log(req.body);
  const { facultyID, password } = req.body;
  console.log(facultyID, password);
  if (!facultyID || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }
  try {
    const teacher = await Teacher.findOne({ facultyID });
    console.log(teacher);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    // const isMatch = await bcrypt.compare(password, teacher.password);
    const isMatch = password === teacher.password;
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: teacher._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, teacher });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Other teacher routes...

module.exports = teacherRouter;
