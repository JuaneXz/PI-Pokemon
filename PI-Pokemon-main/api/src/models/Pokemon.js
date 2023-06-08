const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          args: true,
          msg: 'La imagen debe ser una URL válida.'
        }
      }
    },
    vida:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    ataque:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    defensa:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    velocidad:{
      type: DataTypes.INTEGER
    },
    altura:{
      type: DataTypes.INTEGER
    },
    peso:{
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false
  });
};


