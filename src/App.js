import { useEffect, useState } from 'react';
import Loading from '../src/loading.gif';
import './App.css';
import FighterList from './FighterList';
import FoodList from './FoodList';
import { getFighter, getFood, getMovies, getSports } from './services/fetch-utils';
import SportsList from './SportsList';

function App() {

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

  useEffect(() => {
    fetchData();
    fetchFighter();
    fetchSports();
  }, []);
  return (
    <div className="App">
      <h2>Different Food</h2>
      {
        isLoading ? <img src={Loading} />
          : <FoodList food={food} />
      }
     
      <h2>Different Boxers</h2>

      {
        fightLoad ? <img src={Loading} />
          : <FighterList fighter={fighter} />
      }

      <h2>Different Sports</h2>

      {
        sportLoad ? <img src={Loading} />
          : <SportsList sports={sports} />
      }
    </div>
  );
}

export default App;
