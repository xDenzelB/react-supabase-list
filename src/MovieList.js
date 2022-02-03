import React from 'react';
import Movie from './MovieItem';

export default function MovieList({ movie }) {
  return <div>
    {
      movie.map((movies, i) => <Movie key={movies + i} movies={movies} 
      />)
    }
  </div>;
}
