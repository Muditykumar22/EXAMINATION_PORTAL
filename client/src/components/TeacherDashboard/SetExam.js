import React, { useState } from 'react';
import axios from 'axios';

const SetExam = () => {
    const [examDetails, setExamDetails] = useState({
        department: '', course: '', subject: '', nameOfExam: '', semesterNo: '', questions: []
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setExamDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addQuestion = () => {
        setExamDetails(prevState => ({
            ...prevState,
            questions: [...prevState.questions, { questionType: '', questionText: '', options: ['', '', '', ''], answer: '' }]
        }));
    };

    const handleQuestionChange = (index, e) => {
        const { name, value } = e.target;
        const updatedQuestions = examDetails.questions.map((question, qIndex) => (
            qIndex === index ? { ...question, [name]: value } : question
        ));
        setExamDetails(prevState => ({ ...prevState, questions: updatedQuestions }));
    };

    const handleOptionChange = (qIndex, oIndex, e) => {
        const { value } = e.target;
        const updatedQuestions = examDetails.questions.map((question, questionIndex) => (
            questionIndex === qIndex ? {
                ...question,
                options: question.options.map((option, optionIndex) => (
                    optionIndex === oIndex ? value : option
                ))
            } : question
        ));
        setExamDetails(prevState => ({ ...prevState, questions: updatedQuestions }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/v1/api/exams/set', examDetails);
            console.log(response.data);
            
            alert('Exam set successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to set exam');
        }
    };

    return (
        <div>
            <h1>Set Exam</h1>
            <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={examDetails.department}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={examDetails.course}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={examDetails.subject}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="nameOfExam"
                    placeholder="Exam Name"
                    value={examDetails.nameOfExam}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="semesterNo"
                    placeholder="Semester No"
                    value={examDetails.semesterNo}
                    onChange={handleChange}
                    required
                />
                <button type="button" onClick={addQuestion}>Add Question</button>
                {examDetails.questions.map((question, index) => (
                    <div key={index}>
                        <select
                            name="questionType"
                            value={question.questionType}
                            onChange={e => handleQuestionChange(index, e)}
                            required
                        >
                            <option value="">Select Question Type</option>
                            <option value="MCQ">MCQ</option>
                            <option value="Theory">Theory</option>
                        </select>
                        <input
                            type="text"
                            name="questionText"
                            placeholder="Question Text"
                            value={question.questionText}
                            onChange={e => handleQuestionChange(index, e)}
                            required
                        />
                        {question.questionType === 'MCQ' && question.options.map((option, oIndex) => (
                            <input
                                key={oIndex}
                                type="text"
                                placeholder={`Option ${oIndex+1}`}
                                value={option}
                                onChange={e => handleOptionChange(index, oIndex, e)}
                                required
                                />
                        ))}
                        <input
                            type="text"
                            name="answer"
                            placeholder="Answer"
                            value={question.answer}
                            onChange={e => handleQuestionChange(index, e)}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Set Exam</button>
            </form>
        </div>
    );
};

export default SetExam;