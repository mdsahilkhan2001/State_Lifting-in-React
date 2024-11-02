import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card-container">
      <input
        type="text"
        onChange={(e) => props.setName(e.target.value)}
        placeholder="Enter name"
        className="card-input"
      />
      <p className="card-text">Name of variable values inside the Card: {props.name}</p>
    </div>
  );
}

export default Card;
