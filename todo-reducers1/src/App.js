import './App.css';
import {useGlobalContext} from './components/Context'

function App() {
  const {likes, setLike, removeLike} = useGlobalContext()
  return (
    <div className="App">
   <h1>Reducers</h1>
   <p>Like: {likes}</p>
   <button onClick={setLike}>Like</button>
   <button onClick={removeLike}>Dislike</button>
    </div>
  );
}

export default App;
