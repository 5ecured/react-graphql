import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CharactersList />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
