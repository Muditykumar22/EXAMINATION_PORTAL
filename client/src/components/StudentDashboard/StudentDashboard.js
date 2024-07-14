import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <ul>
                <li><Link to="/examinations">Examinations</Link></li>
                <li><Link to="/student-dashboard/results">Check Results</Link></li>
                <li><Link to="/student-dashboard/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default StudentDashboard;
