import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import SuccessScreen from './components/SuccessScreen'; // Import the SuccessScreen component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/game" element={<GameBoard />} />
          <Route path="/success" element={<SuccessScreen />} /> {/* Add SuccessScreen route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
