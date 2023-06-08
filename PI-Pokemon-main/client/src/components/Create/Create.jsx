import { useDispatch, useSelector } from "react-redux";
import { setPokemonData, setErrors, resetForm, createPokemon, resetTypes } from "../../redux/actions";
import { validate } from './validation';
import styles from './estilos.module.css'

const Create = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonData);
  const errors = useSelector((state) => state.errors);


  const handleOnChange = (event) => {
    const { name, value } = event.target;

    dispatch(setPokemonData(name, value));
    dispatch(setErrors(validate({ ...pokemonData, [name]: value })));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const formErrors = validate(pokemonData);
    dispatch(setErrors(formErrors));
  
    if (Object.keys(formErrors).length === 0) {
      // Modificar el valor de 'tipos' en el estado para contener un array con los tipos
      const tipos = [];
      if (pokemonData.tipo1) {
        tipos.push(pokemonData.tipo1);
      }
      if (pokemonData.tipo2) {
        tipos.push(pokemonData.tipo2);
      }
  
      dispatch(createPokemon({ ...pokemonData, tipos }));
      dispatch(resetForm());
      dispatch(resetTypes());
    }
  };
  

  return (
    <div className={styles.createcontainer}>
      <h2>Crear Pokemon</h2>
      <form className={styles.createform} onSubmit={handleFormSubmit}>
        <div className={styles.formgroup}>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={pokemonData.nombre}
            onChange={handleOnChange}/>
          {errors.nombre && <p style={{color: "red" }}>{errors.nombre}</p>}
        </div>

        <div className={styles.formgroup}>
          <label>Imagen: </label>
          <input type="text" name="imagen" value={pokemonData.imagen}
            onChange={handleOnChange}/>
          {errors.imagen && <p style={{color: "red" }}>{errors.imagen}</p>}
        </div>

        <div className={styles.formgroup}>
          <label>Vida:</label>
          <input type="text" name="vida" value={pokemonData.vida}
            onChange={handleOnChange}/>
          {errors.vida && <p style={{color: "red" }}>{errors.vida}</p>}
        </div>

        <div className={styles.formgroup}>
          <label>Ataque:</label>
          <input type="text" name="ataque" value={pokemonData.ataque}
            onChange={handleOnChange}/>
          {errors.ataque && <p style={{color: "red" }}>{errors.ataque}</p>}
        </div>

        <div className={styles.formgroup}>
          <label>Defensa:</label>
          <input type="text" name="defensa" value={pokemonData.defensa}
            onChange={handleOnChange}/>
          {errors.defensa && <p style={{color: "red" }}>{errors.defensa}</p>}
        </div>

        <div className={styles.formgroup}>
          <label>Velocidad:</label>
          <input type="text" name="velocidad" value={pokemonData.velocidad}
            onChange={handleOnChange}/>
          {errors.velocidad && <p style={{color: "red" }}>{errors.velocidad}</p>}
        </div>

        <div className={styles.formgroup}>
          <label>Altura:</label>
          <input type="text" name="altura" value={pokemonData.altura}
            onChange={handleOnChange}/>
          {errors.altura && <p style={{color: "red" }}>{errors.altura}</p>}
        </div>

        <div>
          <label className={styles.formgroup}>Peso:</label>
          <input type="text" name="peso" value={pokemonData.peso}
            onChange={handleOnChange}/>
          {errors.peso && <p style={{color: "red" }}>{errors.peso}</p>}
        </div>

        <div className={styles.formgroup}> 
        <label>Tipo 1:</label>
        <select name="tipo1" value={pokemonData.tipo1} onChange={handleOnChange}>
          <option value="">Seleccionar tipo</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="electric">Electric</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
          <option value="dragon">Dragon</option>
        </select>
        {errors.tipo1 && <p style={{ color: "red" }}>{errors.tipo1}</p>}
      </div>

      <div className={styles.formgroup}>
        <label>Tipo 2:</label>
        <select name="tipo2" value={pokemonData.tipo2} onChange={handleOnChange}>
          <option value="">Seleccionar tipo</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="electric">Electric</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
          <option value="dragon">Dragon</option>
        </select>
      </div>

        <button className={styles.createbutton} type="submit">Crear</button>
      </form>
    </div>
  );
};

export default Create;
