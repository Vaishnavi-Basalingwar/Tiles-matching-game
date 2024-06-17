// src/components/WelcomeScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('playerName', name);
    navigate('/game');
  };

  return (
    <div>
      <h1 className='heading'>Reach Tiles </h1>
      <h3 className='heading'>Enter Your Name</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" "
          required
        />
        <br></br>
        <button type="submit" className='button'>Start Game</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
