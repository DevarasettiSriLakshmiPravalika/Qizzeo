// components/LoadQuiz.js
import React, { useState } from 'react';
import './css/LoadQuiz.css'; // Import your CSS file for styling

function LoadQuiz({ onLoadQuiz }) {
  const [loadCode, setLoadCode] = useState('');

  const handleInputChange = (event) => {
    setLoadCode(event.target.value);
  };

  const handleLoadClick = () => {
    if (loadCode.trim() !== '') {
      onLoadQuiz(loadCode);
      setLoadCode(''); // Clear the input after loading
    } else {
      alert('Please enter a quiz code to load.');
    }
  };

  return (
    <div>
      <input className='cd'
        type="text"
        placeholder="Enter code"
        value={loadCode}
        onChange={handleInputChange}
      />
      <button className='join' onClick={handleLoadClick}>Join</button>
    </div>
  );
}

export default LoadQuiz;