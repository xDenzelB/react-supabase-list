import React from 'react';
import Sport from './SportsItem';

export default function SportsList({ sports }) {
  return <div>
    {
      sports.map((sport, i) => <Sport key={sport + i} sport={sport} 
      />)
    }
  </div>;
}

