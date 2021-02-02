import moviesData from "../movies";

const initialState = {
  movies: moviesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
      };
    case "ADD_MOVIE":
      const { newMovie } = action.payload;
      newMovie.id = state.movie[state.movies.length - 1].id + 1;
      return {
        ...state,
        movies: [...state.movies, newMovie],
      };

    default:
      return state;
  }
};

export default reducer;
