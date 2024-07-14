import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to Student Portal</h1>
            <Link to="/student-login">Student Login</Link>
            <Link to="/teacher-login">Teacher Login</Link>
            <Link to="/enroll">Enroll Now</Link>
        </div>
    );
};

export default LandingPage;
