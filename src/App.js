import WatchList from "./components/WatchList";
import Watched from "./components/Watched";

function App() {
  return (
    <div className="container">
      <div class="row">
        <div className="col-6">
          <WatchList />
        </div>

        <div className="col-6">
          <Watched />
        </div>
      </div>
    </div>
  );
}

export default App;
