import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import QuizForm from './components/addQuiz';
import QuizMenu from './components/QuizMenu';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/quizform" element={<QuizForm />} /> 
        <Route path="/quizmenu" element={<QuizMenu />} />
      </Routes>
    </div>
  );
}

export default App;