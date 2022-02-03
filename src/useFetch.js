import { useState, useEffect } from 'react';
import { getFood, getFighter, getMovies, getSports } from './services/fetch-utils';

export default function useFetch() {
  const [food, setFood] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [fighter, setFighter] = useState([]);
  const [fightLoad, setFightLoad] = useState(false);
  const [sports, setSport] = useState([]);
  const [sportLoad, setSportLoad] = useState(false);
  const [movie, setMovie] = useState([]);
  const [movieLoad, setMovieLoad] = useState(false);
  
  async function fetchData() {
    setLoading(true);
  
    const data = await getFood();
  
    setLoading(false);
    setFood(data);
  }
  
  async function fetchFighter() {
    setFightLoad(true);
  
    const data = await getFighter();
  
    setFightLoad(false);
    setFighter(data);
  }
  
  async function fetchSports() {
    setSportLoad(true);
  
    const data = await getSports();
  
    setSportLoad(false);
    setSport(data);
  }
  
  async function fetchMovie() {
    setMovieLoad(true);
  
    const data = await getMovies();
  
    setMovieLoad(false);
    setMovie(data);
  }
  
  useEffect(() => {
    fetchData();
    fetchFighter();
    fetchSports();
    fetchMovie();
  }, []);
  return {
    food,
    isLoading,
    fighter,
    fightLoad,
    sports,
    sportLoad,
    movie,
    movieLoad,
    setFood,
    setLoading,
    setFighter,
    setFightLoad,
    setSport,
    setSportLoad,
    setMovie,
    setMovieLoad
  };
}
