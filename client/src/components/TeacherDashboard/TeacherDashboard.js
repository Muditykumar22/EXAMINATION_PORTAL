import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div>
            <h1>Teacher Dashboard</h1>
            <ul>
                <li><Link to="/register-students">Register Students</Link></li>
                <li><Link to="/result-check">Check Results</Link></li>
                <li><Link to="/set-exam">Set Exam</Link></li>
                <li><Link to="/evaluation">Evaluation</Link></li>
            </ul>
        </div>
    );
};

export default TeacherDashboard;
