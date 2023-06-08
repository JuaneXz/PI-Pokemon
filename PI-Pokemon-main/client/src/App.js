import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Pokemones from './components/Pokemones/Pokemones';
import Detail from './components/Detail/Detail'
import Create from './components/Create/Create'
import Mios from './components/Mios/Mios'

function App() {

  const location = useLocation();
  const navigate = useNavigate();


  const onSearch = async (name) => {
    try {
      // Buscar en la base de datos
      const lowercaseName = name.toLowerCase();
      const { data: dbPokemon } = await axios.get(`http://localhost:3001/pokemons/name/:name?name=${lowercaseName}`);
  
      if (dbPokemon) {
        // El Pokémon se encontró en la base de datos
        navigate(`/detail/${name}`);
      } else {
        // Buscar en la API
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
        if (data.id) {
          // El Pokémon se encontró en la API
          navigate(`/detail/${name}`);
        } else {
          alert('No se encontró ningún Pokémon con este nombre.');
        }
      }
    } catch (error) {
      alert('¡No se pudo realizar la búsqueda!');
    }
  };
  

 const isLandingRoute = location.pathname === '/';

  return (
    <div className="container">
      <div>{!isLandingRoute && <NavBar onSearch={onSearch}/>}</div>
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
