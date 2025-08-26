import React, { useState } from 'react';
import './ListaCompras.css';

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== '') {
      setProductos([...productos, nuevoProducto.trim()]);
      setNuevoProducto('');
    }
  };

  const eliminarProducto = (index) => {
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      agregarProducto();
    }
  };

  return (
    <div className="contenedor">
      <h2 className="titulo">🛒 Lista de Compras</h2>
      <div className="formulario">
        <input
          type="text"
          value={nuevoProducto}
          placeholder="Escribe un producto..."
          onChange={(e) => setNuevoProducto(e.target.value)}
          onKeyDown={handleKeyPress}
          className="input"
        />
        <button onClick={agregarProducto} className="boton-agregar">
          Agregar
        </button>
      </div>
      <ul className="lista">
        {productos.length === 0 ? (
          <li className="vacia">Tu lista está vacía</li>
        ) : (
          productos.map((producto, index) => (
            <li key={index} className="item">
              {producto}
              <button onClick={() => eliminarProducto(index)} className="boton-eliminar">
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ListaCompras;
