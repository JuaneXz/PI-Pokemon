const URL = 'https://pokeapi.co/api/v2/pokemon/';
const axios = require('axios')

const getPokById = async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await axios(`${URL}/${id}`);
      const { name } = data;
  
      if (name) {
        const pokemon = {
        id,
        name,
        Vida: data?.stats[0]?.base_stat,
        Ataque: data?.stats[1]?.base_stat,
        Defensa: data?.stats[2]?.base_stat,
        Velocidad: data?.stats[5]?.base_stat,
        Tipo: data.types.length === 1 ? data.types[0].type.name : `${data.types[0].type.name}, ${data.types[1].type.name}`
        };
        return res.status(200).json(pokemon);
      }

      throw new Error(`No se encontró ningún Pokémon con el ID: ${id}`);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  };
  

module.exports ={
    getPokById
}