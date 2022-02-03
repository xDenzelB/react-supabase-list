import React from 'react';

export default function FoodItem({ foods }) {
  return <div>
    <p>{foods.Pizza}</p>
    <p>{foods.Burger}</p>
    <p>{foods.Noodles}</p>
    <p>{foods.Candy}</p>
  </div>;
}
