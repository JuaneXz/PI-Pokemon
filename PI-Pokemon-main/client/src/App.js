import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Pokemones from './components/Pokemones/Pokemones';
import Detail from './components/Detail/Detail'
import Create from './components/Create/Create'
import Mios from './components/Mios/Mios'

function App() {

  const location = useLocation();
 const isLandingRoute = location.pathname === '/';

  return (
    <div className="container">
      <div>{!isLandingRoute && <NavBar />}</div>
      <div>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Pokemones/>}/>
        <Route path='/detail/:name' element={<Detail/>} />
        <Route path='/create' element={<Create/>}/>
        <Route path='/myPokemons' element={<Mios/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
