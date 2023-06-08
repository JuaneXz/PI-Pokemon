import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './estilos.module.css';
import { Link } from 'react-router-dom'

function Pokemon({ name }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className={styles.pokemoncard}>
      {pokemonData ? (
        <>
          <Link to={`/detail/${name}`}>
            <h1>{pokemonData.name}</h1>
          </Link>
          <div className={styles.pokemonsprites}>
            <img className={styles.sprite} src={pokemonData.sprites.front_default} alt="Front" />
          </div>
          <h1>{pokemonData?.types?.length === 1 ? pokemonData?.types[0]?.type?.name : 
          `${pokemonData?.types[0]?.type?.name}, ${pokemonData?.types[1]?.type?.name}`}</h1>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokemon;



