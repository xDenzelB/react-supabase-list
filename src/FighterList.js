import React from 'react';
import Fighter from './FighterItem';

export default function FighterList({ fighter }) {
  return <div>
    {
      fighter.map((fighters, i) => <Fighter key={fighters + i} fighters={fighters} 
      />)
    }
  </div>;
}
