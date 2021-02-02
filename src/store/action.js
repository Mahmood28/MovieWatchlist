const DELETE_MOVIE = "DELETE_MOVIE";
const ADD_MOVIE = "ADD_MOVIE";
const WATCH_MOVIE = "WATCH_MOVIE";

export const deleteProduct = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId },
});

export const createProduct = (newMovie) => ({
  type: ADD_MOVIE,
  payload: { newMovie },
});
