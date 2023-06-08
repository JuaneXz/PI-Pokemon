const { Pokemon } = require('../db');

// Ruta para obtener todos los Pokémon
const getDBPok = async (req, res) => {
  try {
    // Obtener todos los Pokémon de la base de datos
    const pokemons = await Pokemon.findAll();

    // Devolver la lista de Pokémon en formato JSON
    return res.status(200).json(pokemons);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error al obtener los Pokémon' });
  }
};

module.exports ={
    getDBPok
}