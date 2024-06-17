import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessScreen = () => {
  const navigate = useNavigate();

  const handleNavigateToWelcomePage = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Success!</h1>
      <p>Congratulations! You've matched all tiles successfully.</p>
      <button onClick={handleNavigateToWelcomePage}>Go to Welcome Page</button>
    </div>
  );
};

export default SuccessScreen;
