import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import movies from "../movies";
import DeleteButton from "./buttons/DeleteButton";
<<<<<<< HEAD
import AddMovie from "./AddMovie";

=======
import { useDispatch } from "react-redux";
import { updateMovie } from "../store/action";
>>>>>>> f139da51899db02d58252f5d1176a5ecd68d3e15
const Watched = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies)
    .filter(
      (movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase()) && movie.watched
    )
    .map((movie) => (
      <>
        <li className="list-group-item">
          {movie.name}
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              movie.watched = false;
              dispatch(updateMovie(movie.watched));
            }}
          >
            UnWatched
          </button>
          <DeleteButton movieId={movie.id} />
        </li>
      </>
    ));

  return (
    <div className="card">
      {movieList.length}
      <h5 class="card-title">Watched</h5>
      <SearchBar setQuery={setQuery} />
      <ul className="list-group list-group-flush">
        {query ? "No movie found" : movieList}
      </ul>
    </div>
  );
};

export default Watched;
