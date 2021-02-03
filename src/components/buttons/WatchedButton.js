import { updateMovie } from "../../store/action";
import { useDispatch } from "react-redux";

const WatchedButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => {
        props.watched = true;
        dispatch(updateMovie(props.watched));
      }}
    >
      Watched
    </button>
  );
};

export default WatchedButton;
