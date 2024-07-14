{const express = require('express');
  const Exam = require('../models/Exam');
  const examRouter = express.Router();
  
  // Set exam
  examRouter.post('/set', async (req, res) => {
    const { department, course, subject, nameOfExam, semesterNo, questions } = req.body;
  
    // Ensure each question has a valid questionType
    const validQuestionTypes = ['MCQ', 'Theory'];
    for (let question of questions) {
        if (!validQuestionTypes.includes(question.questionType)) {
            return res.status(400).json({ message: 'Invalid question type' });
        }
    }
  
    try {
        const exam = new Exam({
            department,
            course,
            subject,
            nameOfExam,
            semesterNo,
            questions
  
        });
        console.log(exam);
        await exam.save();
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
  // Get all exams
  examRouter.get('/get', async (req, res) => {
    try {
      const exams = await Exam.find();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
  // Get exam by ID
  examRouter.get('/get/:id', async (req, res) => {
    try {
      const exam = await Exam.findById(req.params.id);
      if (!exam) {
        return res.status(404).json({ message: 'Exam not found' });
      }
      res.json(exam);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
  // Update exam by ID
  examRouter.put('/update/:id', async (req, res) => {
    const { department, course, subject, nameOfExam, semesterNo, questions } = req.body;
  
    // Ensure each question has a valid questionType
    const validQuestionTypes = ['MCQ', 'Theory'];
    for (let question of questions) {
      if (!validQuestionTypes.includes(question.questionType)) {
        return res.status(400).json({ message: 'Invalid question type' });
      }
    }
  
    try {
      const exam = await Exam.findByIdAndUpdate(
        req.params.id,
        { department, course, subject, nameOfExam, semesterNo, questions },
        { new: true }
      );
      if (!exam) {
        return res.status(404).json({ message: 'Exam not found' });
      }
      res.json(exam);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
  // Delete exam by ID
  examRouter.delete('/delete/:id', async (req, res) => {
    try {
      const exam = await Exam.findByIdAndDelete(req.params.id);
      if (!exam) {
        return res.status(404).json({ message: 'Exam not found' });
      }
      res.json({ message: 'Exam deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
  module.exports = examRouter;
  }