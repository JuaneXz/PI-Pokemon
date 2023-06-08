import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './estilos.module.css'

export default function Detail (){
    const [pokemonData, setPokemonData] = useState(null);
    const { name } = useParams();

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
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.text}`}>
        <h4 className={styles.heading}>Id: {pokemonData?.id}</h4>
        <h1 className={styles.heading}>Nombre: {pokemonData?.name}</h1>
        <h1>Vida: {pokemonData?.stats[0]?.base_stat}</h1>
        <h1>Ataque: {pokemonData?.stats[1]?.base_stat}</h1>
        <h1>Defensa: {pokemonData?.stats[2]?.base_stat}</h1>
        <h1>Velocidad: {pokemonData?.stats[5]?.base_stat}</h1>
        <h1>Altura: {pokemonData?.height}</h1>
        <h1>Peso: {pokemonData?.weight}</h1>
        <h1>Tipo: {pokemonData?.types?.length === 1 ? pokemonData?.types[0]?.type?.name : `${pokemonData?.types[0]?.type?.name}, ${pokemonData?.types[1]?.type?.name}`}</h1>
      </div>
      <div className={`${styles.column} ${styles.images}`}>
        {pokemonData?.sprites?.front_female ? (
          <div className={styles.imageRow}>
            <div className={styles.imageContainer}>
              <h2 className={styles.imageTitle}>Hembra</h2>
              <img
                src={pokemonData?.sprites?.front_female}
                alt="Front-Female"
                className={`${styles.image} ${styles.frontFemale}`}
              />
          </div>
            <div className={styles.imageContainer}>
              <h2 className={styles.imageTitle}>Macho</h2>
              <img
              src={pokemonData?.sprites?.front_default}
              alt="Front"
              className={styles.image}
              />
            </div>
          </div>
        ) : (
          <div>
            <h2 className={styles.imageTitle}>Macho</h2>
            <img
              src={pokemonData?.sprites?.front_default}
              alt="Front"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
      
}