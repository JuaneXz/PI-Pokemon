import { SET_ERRORS, SET_POKEMON_DATA, RESET_FORM, RESET_TYPES } from "./action-types";

const initialState = {
  pokemonData: {
    nombre: "",
    imagen: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    tipos: [],
    tipo1: "",
    tipo2: "",
  },
  errors: {},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_DATA:
      return {
        ...state,
        pokemonData: {
          ...state.pokemonData,
          [action.payload.field]: action.payload.value,
        },
      };
      case RESET_TYPES:
      return {
        ...state,
        tipo1:'',
        tipo2:''
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default pokemonReducer;




  