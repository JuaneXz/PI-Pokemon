export const validate = (inputs) => {
  const errors = {};

  if (!inputs.nombre) {
    errors.nombre = "El campo nombre es obligatorio.";
  } else if (inputs.nombre.length > 50) {
    errors.nombre = "El nombre no puede tener más de 50 caracteres.";
  }

  if (!inputs.imagen) {
    errors.imagen = "El campo imagen es obligatorio.";
  }

  if (!inputs.vida) {
    errors.vida = "El campo vida es obligatorio.";
  } else if (isNaN(inputs.vida) || inputs.vida > 5000) {
    errors.vida = "La vida debe ser un número válido y no puede superar los 5000.";
  }

  if (!inputs.ataque) {
    errors.ataque = "El campo ataque es obligatorio.";
  } else if (isNaN(inputs.ataque) || inputs.ataque > 1000) {
    errors.ataque = "El ataque debe ser un número válido y no puede superar los 1000.";
  }

  if (!inputs.defensa) {
    errors.defensa = "El campo defensa es obligatorio.";
  } else if (isNaN(inputs.defensa) || inputs.defensa > 1000) {
    errors.defensa = "La defensa debe ser un número válido y no puede superar los 1000.";
  }

  if (inputs.velocidad && (isNaN(inputs.velocidad) || inputs.velocidad > 1000)) {
    errors.velocidad = "La velocidad debe ser un número válido y no puede superar los 1000.";
  }

  if (inputs.peso && (isNaN(inputs.peso) || inputs.peso > 5000)) {
    errors.peso = "El peso debe ser un número válido y no puede superar los 5000.";
  }

  if (inputs.altura && (isNaN(inputs.altura) || inputs.altura > 1000)) {
    errors.altura = "La altura debe ser un número válido y no puede superar los 1000.";
  }
  if(!inputs.tipo1){
    errors.tipo1 = "Debe seleccionar un tipo"
  }

  return errors;
};


  