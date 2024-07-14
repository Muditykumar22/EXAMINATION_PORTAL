const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Teacher = require('./models/Teacher'); // Import Teacher model
const Student = require('./models/Student'); // Import Student model
const teacherRouter = require('./routes/teacher'); // Import teacher routes
const studentRouter = require('./routes/student'); // Import student routes
const examRouter = require('./routes/exam'); // Import exam routes
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/v1/api/teachers', teacherRouter);
app.use('/v1/api/students', studentRouter);
app.use('/v1/api/exams', examRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/student-portal', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Example route to fetch teachers
app.get('/api/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Example route to fetch students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});