import Loading from '../src/loading.gif';
import './App.css';
import FighterList from './FighterList';
import FoodList from './FoodList';
import MovieList from './MovieList';
import SportsList from './SportsList';
import useFetch from './useFetch';

function App() {
 
  const {
    food, isLoading,
    fighter, fightLoad,
    sports, sportLoad,
    movie, movieLoad,
  } = useFetch();
 
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

      <h2>Different Anime!</h2>

      {
        movieLoad ? <img src={Loading} />
          : <MovieList movie={movie} />
      }
    </div>
  );
}

export default App;
