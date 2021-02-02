const DELETE_MOVIE = "DELETE_MOVIE";
const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId },
});

export const addMovie = (newMovie) => ({
  type: ADD_MOVIE,
  payload: { newMovie },
});
