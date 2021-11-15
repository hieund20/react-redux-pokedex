import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Pokemon from './containers/Pokemon';
import PokemonList from './containers/PokemonList';

function App() {
  return (
    <div className="App">
      <nav >
        <NavLink to={'/'}>Search</NavLink>
      </nav>

      <Routes>
        <Route path={'/'} element={<PokemonList />} />
        <Route path={'/pokemon/:pokemon'} element={<Pokemon />} />
        {/* <Redirect to={'/'}/> */}
      </Routes>
    </div>
  );
}

export default App;
