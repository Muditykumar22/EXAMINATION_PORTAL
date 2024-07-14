import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Evaluation = () => {
    const [answersheets, setAnswersheets] = useState([]);
    const [evaluatedAnswers, setEvaluatedAnswers] = useState([]);

    useEffect(() => {
        const fetchAnswersheets = async () => {
            try {
                const response = await axios.get('/api/exams/answersheets');
                setAnswersheets(response.data);
            } catch (error) {
                console.error('Error fetching answersheets', error);
            }
        };

        fetchAnswersheets();
    }, []);

    const evaluateAnswersheet = async (answersheetId) => {
        try {
            const response = await axios.post(`/api/exams/evaluate/${answersheetId}`);
            setEvaluatedAnswers(prevState => [...prevState, response.data]);
            // Show a success message or update the UI as needed
            alert('Answersheet evaluated successfully');
        } catch (error) {
            console.error('Error evaluating answersheet', error);
            // Show an error message
            alert('Failed to evaluate answersheet');
        }
    };

    const handleEvaluation = (answersheetId) => {
        evaluateAnswersheet(answersheetId);
    };

    return (
        <div>
            <h1>Evaluation</h1>
            <ul>
                {answersheets.map(answersheet => (
                    <li key={answersheet.id}>
                        <span>{answersheet.studentName}: {answersheet.examName}</span>
                        <button onClick={() => handleEvaluation(answersheet.id)}>Evaluate</button>
                    </li>
                ))}
            </ul>
            <h2>Evaluated Answersheets</h2>
            <ul>
                {evaluatedAnswers.map(evaluatedAnswer => (
                    <li key={evaluatedAnswer.id}>
                        <span>{evaluatedAnswer.studentName}: {evaluatedAnswer.examName} - Score: {evaluatedAnswer.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Evaluation;
