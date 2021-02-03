import { useState } from "react";
import { addMovie } from "../store/action";
import { useDispatch } from "react-redux";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    name: "",
<<<<<<< HEAD
    image: "",
=======
    watched: false,
>>>>>>> f139da51899db02d58252f5d1176a5ecd68d3e15
  });
  console.log(movie.watched);
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };
  const resetForm = () => {
    setMovie({
      name: "",
<<<<<<< HEAD
      image: "",
=======
      watched: false,
>>>>>>> f139da51899db02d58252f5d1176a5ecd68d3e15
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={movie.name}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Movie Name. </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddMovie;
