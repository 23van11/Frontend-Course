import React, { useState, useEffect, useMemo } from 'react';
import './components/Tareas.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  // useMemo para calcular el tiempo total solo si cambian las tareas
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // useEffect para actualizar el título de la pestaña
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '' && duracion > 0) {
      const nueva = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nueva]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div className="contenedor">
      <h1>⏱️ Contador de Tareas</h1>

      <div className="formulario">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración (min)"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <h2>📝 Tareas</h2>
      {tareas.length === 0 ? (
        <p className="sin-tareas">Aún no hay tareas registradas.</p>
      ) : (
        <ul className="lista-tareas">
          {tareas.map((tarea, index) => (
            <li key={index}>
              <strong>{tarea.nombre}</strong>: {tarea.duracion} minutos
            </li>
          ))}
        </ul>
      )}

      <h3>Total acumulado: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
