import React from 'react';

function InputNumber({ valor, onChange, onSubmit }) {
  const manejarCambio = (e) => {
    onChange(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="number"
        placeholder="Escribe un número del 1 al 100"
        value={valor}
        onChange={manejarCambio}
        min="1"
        max="100"
      />
      <button type="submit">Adivinar</button>
    </form>
  );
}

export default InputNumber;
