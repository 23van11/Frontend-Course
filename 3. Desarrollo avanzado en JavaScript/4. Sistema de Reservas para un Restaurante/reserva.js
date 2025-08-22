let mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Hay mesas disponibles. Reservando ${mesasSolicitadas} mesa(s)...`);
      } else {
        reject(`No hay suficientes mesas disponibles. Solo quedan ${mesasDisponibles}.`);
      }
    }, 2000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.2; // 80% de probabilidad de éxito
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject(`Error al enviar el correo a ${nombreCliente}.`);
      }
    }, 1500);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    mesasDisponibles -= mesasSolicitadas;

    console.log("Enviando confirmación...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    console.log(`Reserva completada para ${nombreCliente}.\n`);
  } catch (error) {
    console.log("Error:", error, "\n");
  }
}

// Llamadas de prueba
hacerReserva("Juan Pérez", 3);
hacerReserva("Ana Torres", 2);
hacerReserva("Luis Gómez", 2);


// Probar la función con varios escenarios:
hacerReserva("Carlos", 2);
hacerReserva("María", 4);
hacerReserva("Pedro", 1);
