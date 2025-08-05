import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/quizMenu.css'; // You can style this as needed

const QuizMenu = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/qizzeo/all');
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };
        fetchQuizzes();
    }, []);

    return (
        <div className="quiz-container">
            {!selectedQuiz ? (
                <>
                    <h2 className='h1'>All Quizzes</h2>
                    <div className="quiz-card-list">
                        {quizzes.map((quiz, index) => (
                            <div
                                key={index}
                                className="quiz-card"
                                onClick={() => setSelectedQuiz(quiz)}
                            >
                                <h3>{quiz.title}</h3>
                                <p>{quiz.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="quiz-detail">
                    <button className="quiz1" onClick={() => setSelectedQuiz(null)}>← Back to Quizzes</button>
                    <h2>{selectedQuiz.title}</h2>
                    <p><strong>Description:</strong> {selectedQuiz.description}</p>
                    <p><strong>Code:</strong> {selectedQuiz.code}</p>
                    <h3>Questions:</h3>
                    {selectedQuiz.questions.map((q, i) => (
                        <div key={i} className="question-box">
                            <p><strong>Q{i + 1}:</strong> {q.text}</p>
                            <ul>
                                {q.options.map((option, j) => (
                                    <li key={j}>{option}</li>
                                ))}
                            </ul>
                            <p><strong>Correct Answer:</strong> {q.correctAnswer}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuizMenu;
