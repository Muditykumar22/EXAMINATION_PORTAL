import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Examinations = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await axios.get('http://localhost:5000/v1/api/exams/get');
                setExams(response.data);
            } catch (error) {
                console.error('Error fetching exams', error);
            }
        };

        fetchExams();
    }, []);

    return (
        <div>
            <h1>Examinations</h1>
            <ul>
                {exams.map(exam => (
                    <li key={exam._id}>
                        <div>
                            <h2>{exam.nameOfExam}</h2>
                            <p>Department: {exam.department}</p>
                            <p>Course: {exam.course}</p>
                            <p>Subject: {exam.subject}</p>
                            <p>Semester: {exam.semesterNo}</p>
                            <Link to={`/examinations/${exam._id}`}>
                                <button>Attempt Now</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Examinations;
