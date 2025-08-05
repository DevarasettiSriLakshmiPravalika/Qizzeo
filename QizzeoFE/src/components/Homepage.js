import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import log from "../logo.png";
import './css/Homepage.css';
import LoadQuiz from './LoadQuiz'; // Import LoadQuiz component

const Homepage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLoadQuiz = (code) => {
        console.log(`Quiz with code ${code} loaded.`);
        // Add your logic for loading the quiz here
    };

    const redirectToQuizForm = () => {
        navigate("/quizform"); // Redirect to QuizForm.js route
    };

    const redirectToQuizMenu = () => {
        navigate("/quizmenu"); // Redirect to QuizMenu.js route
    }

    return (
        <div>
            <img className="Log" src={log} height="95px" width="119px" alt="Logo" />
            <text className="t2">Let's Get Quizzing!</text>
            <div className="jc">
                <LoadQuiz onLoadQuiz={handleLoadQuiz} /> {/* Render LoadQuiz component */}
            </div>
            <button className="create" onClick={redirectToQuizForm}>Create Quiz</button>
            <button className="quiz" onClick={redirectToQuizMenu}>Existing Quizes</button>
        </div>
    );
};

export default Homepage;