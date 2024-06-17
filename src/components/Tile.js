import React from 'react';
import './Tile.css';

const Tile = ({ tile, isFlipped, onClick }) => {
  return (
    <div className={`tile ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? <img src={tile.image} alt="tile" /> : null}
    </div>
  );
};

export default Tile;
