const destinos = [];

export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
  destinos.push({ destino, fecha, transporte, personas });
};

export const obtenerDestinos = () => destinos;
