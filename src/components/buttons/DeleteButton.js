import { deleteMovie } from "../../store/action";
import { useDispatch } from "react-redux";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => dispatch(deleteMovie(props.movieId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
