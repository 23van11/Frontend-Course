import React, { useState, useEffect, useRef } from 'react';

function Bitacora() {
  const [planetas, setPlanetas] = useState(() => {
    return JSON.parse(localStorage.getItem('planetas')) || [];
  });

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const inputImagenRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    setPlanetas([...planetas, nuevoPlaneta]);
    setNombre('');
    setDescripcion('');
    setImagen(null);

    if (inputImagenRef.current) {
      inputImagenRef.current.value = '';
    }
  };

  const handleDelete = (index) => {
    const nuevos = [...planetas];
    nuevos.splice(index, 1);
    setPlanetas(nuevos);
  };

  return (
    <div className="bitacora">
      <h1>📘 Bitácora de Exploración</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit">Guardar Planeta</button>
      </form>

      <h2>📋 Planetas Registrados</h2>
      {planetas.length === 0 ? (
        <p>No hay planetas registrados aún.</p>
      ) : (
        planetas.map((planeta, idx) => (
          <div key={idx} style={{ marginBottom: '20px', borderBottom: '1px solid #00e6e6', paddingBottom: '10px' }}>
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && <img src={planeta.imagen} alt={planeta.nombre} />}
            <button onClick={() => handleDelete(idx)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Bitacora;
