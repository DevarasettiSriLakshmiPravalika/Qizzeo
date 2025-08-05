import React, { useState } from "react";
import axios from "axios";
import "./css/addQuiz.css";

const AddQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [],
  });

  // Add a new empty question to the quiz
  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        { text: "", options: ["", "", "", ""], correctAnswer: "" },
      ],
    });
  };

  // Update the main quiz fields
  const handleChange = (field, value) => {
    setQuiz({ ...quiz, [field]: value });
  };

  // Update question details
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...quiz.questions];
    if (field === "options") {
      updatedQuestions[index].options = value;
    } else {
      updatedQuestions[index][field] = value;
    }
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  // Submit the quiz to the backend
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/qizzeo/addQuiz", quiz);
      alert(response.data); // Display the quiz code
      // Optionally reset the form
      setQuiz({ title: "", description: "", questions: [] });
    } catch (error) {
      console.error("Error adding quiz:", error);
      alert("Failed to add quiz. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <center>
        {/* Title Input */}
        <input
          className="txtBx"
          value={quiz.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Quiz Title"
        />
        <br />
        <br />
        {/* Description Input */}
        <textarea
          className="txtBx"
          value={quiz.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Description"
        />
        <br />
        <br />

        {/* Render Questions */}
        {quiz.questions.map((q, idx) => (
          <div key={idx} className="question-block">
            <br/><br/>
            <input
              className="qBx"
              value={q.text}
              onChange={(e) =>
                handleQuestionChange(idx, "text", e.target.value)
              }
              placeholder={`Question ${idx + 1}`}
            />
            <br />
            <br />

            {/* Options Input */}
            {q.options.map((option, optionIdx) => (
              <input
                key={optionIdx}
                className="opBx"
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...q.options];
                  updatedOptions[optionIdx] = e.target.value;
                  handleQuestionChange(idx, "options", updatedOptions);
                }}
                placeholder={`Option ${optionIdx + 1}`}
              />
            ))}
            <br />
            <br />

            {/* Correct Answer Input */}
            <input
              className="opBx"
              value={q.correctAnswer}
              onChange={(e) =>
                handleQuestionChange(idx, "correctAnswer", e.target.value)
              }
              placeholder="Correct Answer"
            />
          </div>
        ))}

        {/* Add Question Button */}
        <button className="subm1" onClick={handleAddQuestion}>
          Add Question
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;

        {/* Submit Quiz Button */}
        <button className="subm2" onClick={handleSubmit}>
          Submit Quiz
        </button>
      </center>
    </div>
  );
};

export default AddQuiz;
