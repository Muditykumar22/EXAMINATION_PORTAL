import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async () => {
        try {
            const response = await axios.post('/api/students/change-password', {
                currentPassword, newPassword
            });
            console.log(response.data);
            // Show a success message or redirect
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Settings</h1>
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default Settings;
