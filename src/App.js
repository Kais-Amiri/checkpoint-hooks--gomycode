import "./App.css";
import MovieList from "./components/moviesList/MovieList";
import { myMovies } from "./Data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Star from "./components/starComponent/Star";

function App() {
  const fiveStars = 5;
  const [Movies, setmyMovie] = useState(myMovies);
  const [inputSearch, setInputSearch] = useState("");
  const [starSearch, setStarSearch] = useState(null);
  return (
    <div className="App">
      <header>
        <input type="text" onChange={(e) => setInputSearch(e.target.value)} />
        {[...Array(fiveStars)].map((e, i) => (
          <Star key={i} setStarSearch={setStarSearch} i={i} />
        ))}
      </header>
      {}
      <MovieList
        myMovies={Movies}
        setmyMovie={setmyMovie}
        inputSearch={inputSearch}
        starSearch={starSearch}
      />
    </div>
  );
}

export default App;
