import axios from 'axios';
import { SET_ERRORS, SET_POKEMON_DATA, RESET_FORM, RESET_TYPES } from "./action-types";

export const setPokemonData = (field, value) => ({
  type: SET_POKEMON_DATA,
  payload: { field, value },
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors,
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const resetTypes = () => {
  return {
    type: RESET_TYPES,
  };
};

export const createPokemon = (pokemonData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/pokemon', pokemonData);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };
};



  