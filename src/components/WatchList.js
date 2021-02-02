import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const movieList = useSelector((state) => state.movies)
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <p> {movie.name} </p>);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {movieList}
      <AddButton />
    </div>
  );
};

export default MovieList;
