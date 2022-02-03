import React from 'react';
import Food from './FoodItem';

export default function FoodList({ food }) {
  return <div> { 
    food.map((foods, i) => <Food key={foods + i} foods={foods} 
    />)
  }
  </div>;
}