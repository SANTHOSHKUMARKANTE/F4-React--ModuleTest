import MoviesList from "./Components/MoviesList/MoviesList";
import movies from "./assets/Movies";
import Genre from "./assets/Genre";
import GenreFilter from "./Components/GenreFilter/GenreFilter";
import "./App.css";

function App() {
  return (
    <>
    <h1 className="heading">Top 55 Movies of All Time</h1>
      <div className="container">
        
        <GenreFilter genre_data={Genre} />
        <MoviesList data={movies} />
      </div>
    </>
  );
}

export default App;
