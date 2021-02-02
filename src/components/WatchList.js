import SearchBar from "./SearchBar";
import { useState } from "react";
import movies from "../movies";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const movieList = movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <li className="list-group-item"> {movie.name} </li>);

  return (
    <div className="card">
      <h5 class="card-title">Watch List</h5>
      <SearchBar setQuery={setQuery} />
      <ul className="list-group list-group-flush">{movieList}</ul>
    </div>
  );
};

export default MovieList;
