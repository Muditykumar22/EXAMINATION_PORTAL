import React, { useState } from 'react';
import axios from 'axios';

const TeacherLogin = () => {
    const [facultyID, setFacultyID] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/v1/api/teachers/login', { facultyID, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log(res.data);
            if(res.data.token) {
                localStorage.setItem('teacherToken', res.data.token);
                window.location.href = '/teacher-dashboard'; // Redirect to teacher dashboard
            }
            // You can redirect to teacher dashboard or store token in localStorage
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Teacher Login</h1>
            <input type="text" placeholder="Faculty ID" value={facultyID} onChange={e => setFacultyID(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default TeacherLogin;
