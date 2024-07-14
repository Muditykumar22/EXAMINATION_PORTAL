import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/api/questions');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions', error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            <h1>Question List</h1>
            <ul>
                {questions.map(question => (
                    <li key={question.id}>{question.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;
