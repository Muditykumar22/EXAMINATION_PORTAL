import React, { useState } from 'react';
import axios from 'axios';

const Enroll = () => {
    const [studentDetails, setStudentDetails] = useState({
        name: '', address: '', email: '', dob: '', fatherName: '', fatherContact: '', preparationCourse: '', username: '', password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setStudentDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/v1/api/students/register', studentDetails);
            console.log(response.data);
            // Show a success message or redirect
            alert('Student registered successfully');
        } catch (error) {
            console.error(error);
            // Show an error message
            alert('Failed to register student');
        }
    };

    return (
        <div>
            <h1>Register Students</h1>
            <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={studentDetails.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Student Address"
                    value={studentDetails.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Student Email"
                    value={studentDetails.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={studentDetails.dob}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="fatherName"
                    placeholder="Father's Name"
                    value={studentDetails.fatherName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="fatherContact"
                    placeholder="Father's Contact"
                    value={studentDetails.fatherContact}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="preparationCourse"
                    placeholder="Preparation Course"
                    value={studentDetails.preparationCourse}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    value={studentDetails.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={studentDetails.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Studentcontact"
                    placeholder="Studentcontact"
                    value={studentDetails.Studentcontact}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Enroll;
