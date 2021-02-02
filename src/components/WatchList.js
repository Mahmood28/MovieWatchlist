import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import movies from "../movies";
import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import AddMovie from "./AddMovie";
import { useDispatch } from "react-redux";
import { updateMovie } from "../store/action";
const WatchList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [_movies, setMovies] = useState(movies);
  const movieList = useSelector((state) => state.movies)
    .filter(
      (movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase()) && !movie.watched
    )
    .map((movie) => (
      <>
        <li className="list-group-item">
          {movie.name}
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              movie.watched = true;
              dispatch(updateMovie(movie.watched));
            }}
          >
            Watched
          </button>
          <DeleteButton movieId={movie.id} />
        </li>
      </>
    ));

  return (
    <div className="card">
      <h5 class="card-title">Watch List</h5>
      {movieList.length}
      <AddMovie />
      <SearchBar setQuery={setQuery} />
      <ul className="list-group list-group-flush">{movieList}</ul>
    </div>
  );
};

export default WatchList;
