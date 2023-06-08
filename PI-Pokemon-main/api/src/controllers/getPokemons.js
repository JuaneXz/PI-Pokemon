const URL = 'https://pokeapi.co/api/v2/pokemon/';
const axios = require('axios');

const getPokemons = async (req, res) => {
  try {

    const { data } = await axios.get(`${URL}`);
    const pokemons = data.results;

    return res.status(200).json(pokemons);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los pokemons' });
  }
};

module.exports = { 
    getPokemons 
};
