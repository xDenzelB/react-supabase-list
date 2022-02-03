import React from 'react';

export default function SportsItem({ sport }) {
  return <div>
    <h2>{sport.Sport}</h2>
    <p>Players: {sport.Players}</p>
    <p>Equipment: {sport.Equipment}</p>
    <p>Professional Name: {sport.Professional}</p>

  </div>;
}
