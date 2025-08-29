import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';
import '../index.css';

function Game() {
  const [numeroCorrecto, setNumeroCorrecto] = useState(0);
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    generarNuevoNumero();
  }, []);

  const generarNuevoNumero = () => {
    const aleatorio = Math.floor(Math.random() * 100) + 1;
    setNumeroCorrecto(aleatorio);
    setNumeroUsuario('');
    setMensaje('');
    setIntentos(0);
    setJuegoTerminado(false);
    console.log("Número secreto:", aleatorio); // Opcional: ayuda en pruebas
  };

  const manejarIntento = () => {
    const intento = parseInt(numeroUsuario, 10);
    if (isNaN(intento)) {
      setMensaje("Por favor, introduce un número válido.");
      return;
    }

    setIntentos(prev => prev + 1);

    if (intento === numeroCorrecto) {
      setMensaje(`🎉 ¡Correcto! Lo lograste en ${intentos + 1} intentos.`);
      setJuegoTerminado(true);
    } else if (intento < numeroCorrecto) {
      setMensaje("🔼 El número es mayor.");
    } else {
      setMensaje("🔽 El número es menor.");
    }
  };

  return (
    <div className="game-container">
      <h1>🎯 Adivina el Número</h1>
      {!juegoTerminado && (
        <InputNumber
          valor={numeroUsuario}
          onChange={setNumeroUsuario}
          onSubmit={manejarIntento}
        />
      )}
      <Message mensaje={mensaje} />
      {juegoTerminado && <RestartButton onRestart={generarNuevoNumero} />}
    </div>
  );
}

export default Game;
