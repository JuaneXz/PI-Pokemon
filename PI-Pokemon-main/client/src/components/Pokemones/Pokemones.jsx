import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
import styles from './estilos.module.css';
import Pagination from '../Pagination/Pagination';

export default function Pokemones() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState('original');

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1010');
      setPokemons(response.data.results);
      setTotalPages(Math.ceil(response.data.results.length / perPage));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortPokemons = (pokemons) => {
    if (sortOrder === 'ascendente') {
      return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'descendente') {
      return [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return pokemons;
    }
  };

  const renderPokemons = () => {
    const sortedPokemons = sortPokemons(pokemons);
    const indexOfLastPokemon = currentPage * perPage;
    const indexOfFirstPokemon = indexOfLastPokemon - perPage;
    const currentPokemons = sortedPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    return currentPokemons.map((pokemon) => (
      <div className={styles.column} key={pokemon.name}>
        <Pokemon name={pokemon.name}/>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.sortOrder}>
        <label htmlFor="sortOrder">Orden:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="original">Original</option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>

      <div className={styles.pokemonContainer}>{renderPokemons()}</div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}










