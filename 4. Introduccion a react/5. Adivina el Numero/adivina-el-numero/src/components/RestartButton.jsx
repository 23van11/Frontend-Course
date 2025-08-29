import React from 'react';

function RestartButton({ onRestart }) {
  return (
    <button onClick={onRestart}>
      🔄 Reiniciar Juego
    </button>
  );
}

export default RestartButton;
