import React from 'react';

export default function FighterItem({ fighters }) {
  return <div>
    <h3>{fighters.Name}</h3>
    <p>Age: {fighters.Age}</p>
    <p>Weight: {fighters.Weight}</p>
    <p>Wins: {fighters.Wins}</p>
  </div>;
}
