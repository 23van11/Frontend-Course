export const destinos = [];

export const registrarDestino = (destino, fecha, transporte) => {
  const nuevoDestino = { destino, fecha, transporte };
  destinos.push(nuevoDestino);
};

export const calcularCosto = (transporte) => {
  const costos = {
    avion: 1000,
    tren: 500,
    autobus: 300,
  };
  return costos[transporte] || 0;
};

export const mostrarItinerario = () => {
  destinos.forEach((viaje, index) => {
    console.log(`${index + 1}. ${viaje.destino} - ${viaje.fecha} (${viaje.transporte})`);
  });
};
