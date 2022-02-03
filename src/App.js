import { useEffect, useState } from 'react';
import Loading from '../src/loading.gif';
import './App.css';
import FoodList from './FoodList';
import { getFighter, getFood, getMovies, getSports } from './services/fetch-utils';

function App() {

  const [food, setFood] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    const data = await getFood();

    setLoading(false);
    setFood(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h2>Different Food</h2>
      {
        isLoading ? <img src={Loading} />
          : <FoodList food={food} />
      }
     
    </div>
  );
}

export default App;
