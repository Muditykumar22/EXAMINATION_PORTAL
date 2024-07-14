import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultCheck = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get('/api/results');
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching results', error);
            }
        };

        fetchResults();
    }, []);

    return (
        <div>
            <h1>Check Results</h1>
            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.studentName}: {result.examName} - {result.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultCheck;
