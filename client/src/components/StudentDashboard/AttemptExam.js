import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AttemptExam = () => {
    const { id } = useParams();
    const [exam, setExam] = useState(null);
    const [answers, setAnswers] = useState({}); // To store the answers given by the student

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/v1/api/exams/get/${id}`);
                console.log(response.data.questions);
                setExam(response.data);
            } catch (error) {
                console.error('Error fetching exam', error);
            }
        };

        fetchExam();
    }, [id]);

    const handleChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: value
        });
    };

    const handleSubmit = async () => {
        try {
            // Implement your logic to handle submission
            console.log('Submitted Answers:', answers);
            alert('Exam submitted successfully');
        } catch (error) {
            console.error('Error submitting exam', error);
            alert('Failed to submit exam');
        }
    };

    if (!exam) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{exam.nameOfExam}</h1>
            <p>Department: {exam.department}</p>
            <p>Course: {exam.course}</p>
            <p>Subject: {exam.subject}</p>
            <p>Semester: {exam.semesterNo}</p>
            <h2>Question:</h2>

            <ul>
                {exam.questions.map((question, index) => (
                
                    <li key={index}>
                        <p>{question.questionText}</p>
                        {question.questionType === 'MCQ' ? (
                            <ul>
                                {question.options.map((option, oIndex) => (
                                    <li key={oIndex}>
                                        <label>
                                            <input 
                                                type="radio" 
                                                name={`question-${index}`} 
                                                value={option}
                                                checked={answers[index] === option}
                                                onChange={() => handleChange(index, option)} 
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <textarea 
                                placeholder="Write your answer here"
                                value={answers[index] || ''}
                                onChange={(e) => handleChange(index, e.target.value)}
                            ></textarea>
                        )}
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Submit Exam</button>
        </div>
    );
};

export default AttemptExam;
