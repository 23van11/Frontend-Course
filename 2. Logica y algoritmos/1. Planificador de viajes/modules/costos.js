const tarifasTransporte = {
    avion: 300,
    bus: 100,
    tren: 150,
  };
  
  const tarifasAlojamiento = {
    'París': 200,
    'Madrid': 150,
    'Roma': 180,
    'Londres': 220,
  };
  
  export const calcularCosto = (destino, transporte, personas = 1) => {
    const costoTransporte = tarifasTransporte[transporte] || 0;
    const costoAlojamiento = tarifasAlojamiento[destino] || 100;
    const total = (costoTransporte + costoAlojamiento) * personas;
  
    return personas >= 4 ? total * 0.9 : total;
  };
  