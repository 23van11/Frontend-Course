import { registrarDestino, obtenerDestinos } from './modules/viajes.js';
import { calcularCosto } from './modules/costos.js';

const formulario = document.getElementById('formulario-viaje');
const listaItinerario = document.getElementById('itinerario-lista');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const destino = document.getElementById('destino').value;
  const fecha = document.getElementById('fecha').value;
  const transporte = document.getElementById('transporte').value;
  const personas = parseInt(document.getElementById('personas').value);

  registrarDestino(destino, fecha, transporte, personas);
  formulario.reset();

  mostrarItinerario();
});

const mostrarItinerario = () => {
  listaItinerario.innerHTML = '';

  const viajes = obtenerDestinos();

  viajes.forEach(({ destino, fecha, transporte, personas }) => {
    const costo = calcularCosto(destino, transporte, personas);

    const li = document.createElement('li');
    li.textContent = `Destino: ${destino}, Fecha: ${fecha}, Transporte: ${transporte}, Personas: ${personas}, Costo Total: $${costo}`;
    listaItinerario.appendChild(li);
  });
};
