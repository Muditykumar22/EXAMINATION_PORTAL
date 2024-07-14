import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StudentLogin from './components/StudentLogin';
import TeacherLogin from './components/TeacherLogin';
import Enroll from './components/Enroll';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard';
import RegisterStudents from './components/TeacherDashboard/RegisterStudents';
import SetExam from './components/TeacherDashboard/SetExam';
import Examinations from './components/StudentDashboard/Examinations';
import AttemptExam from './components/StudentDashboard/AttemptExam'; // Import AttemptExam

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/register-students" element={<RegisterStudents />} />
        <Route path="/set-exam" element={<SetExam />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/examinations/:id" element={<AttemptExam />} /> {/* Add route for AttemptExam */}
      </Routes>
    </Router>
  );
}

export default App;
