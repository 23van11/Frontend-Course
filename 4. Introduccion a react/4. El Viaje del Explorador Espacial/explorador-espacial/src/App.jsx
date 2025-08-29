import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';
import Bitacora from './Bitacora';
import './index.css';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En órbita');
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia(prev => prev + 10);
      setCombustible(prev => (prev > 0 ? prev - 5 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado actual: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    const nuevoPlaneta = `Planeta ${planetasVisitados.length + 1}`;
    setEstadoNave('Aterrizando');
    setPlanetasVisitados(prev => [...prev, nuevoPlaneta]);
  };

  return (
    <div>
      <div className="panel-control">
        <h1>🛰️ Panel de Control</h1>
        <p>📏 Distancia recorrida: <strong>{distancia} km</strong></p>
        <p>⛽ Combustible: <strong>{combustible}%</strong></p>
        <p>🚀 {mensajeEstado}</p>
        <button onClick={aterrizar} disabled={combustible <= 0}>
          Aterrizar en nuevo planeta
        </button>

        <h2>🪐 Planetas Visitados</h2>
        {planetasVisitados.map((nombre, idx) => (
          <Planeta key={idx} nombre={nombre} />
        ))}
      </div>

      <Bitacora />
    </div>
  );
}

export default App;
