const { Pokemon, Type } = require('../db');

const postPokemon = async (req, res) => {
  try {
    const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos } = req.body;

    // Crear el nuevo pokémon
    const newPokemon = await Pokemon.create({
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
    });

    // Asociar los tipos al pokémon
    if (tipos && tipos.length > 0) {
      for (let i = 0; i < tipos.length; i++) {
        const tipoEncontrado = await Type.findOne({
          where: { nombre: tipos[i] }, // Buscar el tipo por nombre
        });

        // Asociar el tipo encontrado al nuevo pokémon
        await newPokemon.addType(tipoEncontrado);
      }
    }

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postPokemon,
};




