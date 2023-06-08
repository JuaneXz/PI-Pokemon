import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchBar() {
   
   const [name, setName] = useState('');

   const handleChange = (event) => {
      setName(event.target.value)
      event.target.value = '';
   }
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
   
   return (
      <div>
         <input type='search' onChange={handleChange} value={name}/>
         <button onClick={()=>{onSearch(name); setName('')}}>Buscar</button>
      </div>
   );
}