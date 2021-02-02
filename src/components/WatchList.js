import SearchBar from "./SearchBar";
import { useState } from "react";
import movies from "../movies";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const movieList = movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <p> {movie.name} </p>);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {movieList}
    </div>
  );
};

export default MovieList;
