import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tile from './Tile';
import './GameBoard.css';

const GameBoard = () => {
  const [tiles, setTiles] = useState(shuffleTiles(generateTiles()));
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const history = useNavigate();

  const handleQuit = () => {
    history('/');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const handleTileClick = (index) => {
    if (flippedTiles.length === 2 || flippedTiles.includes(index) || matchedTiles.includes(tiles[index].id)) return;

    const newFlippedTiles = [...flippedTiles, index];
    setFlippedTiles(newFlippedTiles);

    if (newFlippedTiles.length === 2) {
      const [firstIndex, secondIndex] = newFlippedTiles;
      if (tiles[firstIndex].id === tiles[secondIndex].id) {
        setMatchedTiles([...matchedTiles, tiles[firstIndex].id]);
        setScore(score + 1);
        setFlippedTiles([]);
      } else {
        setScore(score - 1);
        setTimeout(() => setFlippedTiles([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedTiles.length === tiles.length / 2) {
      // All tiles matched, navigate to success screen
      history('/success');
    }
  }, [matchedTiles]);

  return (

    <div>
        <h1 className='header'>Mahajong Game</h1>
      <div className="score-time-container">
        <span>Score: {score}</span>
        <span>Time: {elapsedTime}s</span>
      </div>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            tile={tile}
            isFlipped={flippedTiles.includes(index) || matchedTiles.includes(tile.id)}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
      <button className='button' onClick={handleQuit}>Quit</button>
    </div>
  );
};

const generateTiles = () => {
  const tileImages = [
    'https://via.placeholder.com/100?text=1',
    'https://via.placeholder.com/100?text=2',
    'https://via.placeholder.com/100?text=3',
    'https://via.placeholder.com/100?text=4',
    'https://via.placeholder.com/100?text=5',
    'https://via.placeholder.com/100?text=6',
  ];
  return tileImages.concat(tileImages).map((image, index) => ({
    id: index % tileImages.length,
    image
  }));
};

const shuffleTiles = (tiles) => {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  return tiles;
};

export default GameBoard;
