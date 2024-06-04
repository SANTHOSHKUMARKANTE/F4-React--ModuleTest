import MoviesList from "./Components/MoviesList/MoviesList";
import movies from "./assets/Movies";
import Genre from "./assets/Genre";
import GenreFilter from "./Components/GenreFilter/GenreFilter";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div className="container">
      <GenreFilter genre_data={Genre} />
      <MoviesList data={movies} />
    </div>
  );
}

export default App;
