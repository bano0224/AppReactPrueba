import './App.css';
import { Route } from 'react-router-dom';
import Movies from './Components/Movies/movies'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Movies}/>
    </div>
  );
}

export default App;
