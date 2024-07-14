import React, { useState } from 'react';
import axios from 'axios';

const StudentLogin = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/v1/api/students/login', { username, password });
            console.log(res.data);{
                localStorage.setItem('studentToken', res.data.token);
                window.location.href = '/Student-dashboard';
            }
            // You can redirect to student dashboard or store token in localStorage
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Student Login</h1>
            <input type="text" placeholder="USERNAME" value={username} onChange={e => setusername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default StudentLogin;
