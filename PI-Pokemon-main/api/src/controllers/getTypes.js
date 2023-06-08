const { Type } = require('../db');
const URL = 'https://pokeapi.co/api/v2/type/';
const axios = require('axios');

const getTypes = async (req, res) => {
  try {
    const types = await Type.findAll();

    if (types.length === 0) {
      const { data } = await axios.get(`${URL}`);
      const typeNames = data.results.map((type) => type.name);

      const createdTypes = await Promise.all(
        typeNames.map((typeName) => Type.findOrCreate({ where: { nombre: typeName } }))
      );

      return res.status(200).json(createdTypes.map(([type]) => type));
    }

    return res.status(200).json(types);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los tipos' });
  }
};

module.exports = {
  getTypes
};
