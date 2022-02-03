import React from 'react';

export default function MovieItem({ movies }) {
  return <div>
    <h2>{movies.Name}</h2>
    <p>Genre: {movies.Genre}</p>
    <h3>Where to Watch??</h3>
    <p>{movies.Watch}</p>
  </div>;
}
