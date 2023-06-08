const URL = 'https://pokeapi.co/api/v2/pokemon/';
const axios = require('axios');
const { Pokemon } = require('../db')

const getPokByName = async (req, res) => {
  try {
    const { name } = req.query;
    const lowercaseName = name.toLowerCase();

    // Buscar en la base de datos
    const dbPokemon = await Pokemon.findOne({ where: { nombre: lowercaseName } });

    if (dbPokemon) {
      return res.status(200).json(dbPokemon);
    }

    // Buscar en la API
    const { data } = await axios(`${URL}/${lowercaseName}`);
    const { id } = data;

    if (id) {
      const pokemon = {
        id,
        name,
        Vida: data?.stats[0]?.base_stat,
        Ataque: data?.stats[1]?.base_stat,
        Defensa: data?.stats[2]?.base_stat,
        Velocidad: data?.stats[5]?.base_stat,
        Tipo: data?.types?.length === 1 ? data?.types[0]?.type?.name : `${data?.types[0]?.type?.name}, ${data?.types[1]?.type?.name}`
      };
      return res.status(200).json(pokemon);
    }

    // Pokémon no encontrado
    return res.status(404).json({ message: `No se encontró ningún Pokémon con el nombre: ${lowercaseName}` });
  } catch (error) {
    // Error en la búsqueda
    return res.status(500).json({ error: 'Error al buscar el Pokémon' });
  }
};

module.exports = {
  getPokByName
};


