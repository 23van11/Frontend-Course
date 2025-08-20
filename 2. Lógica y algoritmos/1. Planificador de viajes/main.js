// main.js

import { registrarDestino, calcularCosto, mostrarItinerario } from './logica/viajes.js';
import { aplicarDescuento } from './logica/utilidades.js';

const agregarDestino = () => {
  const destino = prompt('Ingrese el destino:');
  const fecha = prompt('Ingrese la fecha (YYYY-MM-DD):');
  const transporte = prompt('Ingrese el tipo de transporte (avion, tren, autobus):');
  registrarDestino(destino, fecha, transporte);
};

const calcularYMostrarCosto = () => {
  const transporte = prompt('Ingrese el tipo de transporte para calcular el costo:');
  const costo = calcularCosto(transporte);
  const numPersonas = parseInt(prompt('Ingrese el número de personas:'));
  const costoFinal = aplicarDescuento(costo, numPersonas);
  console.log(`Costo estimado: $${costoFinal}`);
};

const mostrarYSalir = () => {
  mostrarItinerario();
  alert('¡Gracias por usar el planificador de viajes!');
};

const iniciar = () => {
  let opcion;
  do {
    opcion = prompt('Seleccione una opción:\n1. Agregar destino\n2. Calcular costo\n3. Mostrar itinerario\n4. Salir');
    switch (opcion) {
      case '1':
        agregarDestino();
        break;
      case '2':
        calcularYMostrarCosto();
        break;
      case '3':
        mostrarYSalir();
        break;
      case '4':
        alert('¡Hasta luego!');
        break;
      default:
        alert('Opción no válida');
    }
  } while (opcion !== '4');
};

iniciar();
