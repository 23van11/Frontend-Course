const invitados = [
    "Alicia", "Beatriz", "Camilo", "Carlos", "Daniela",
    "Eduardo", "Emilia", "Fernando", "Gabriela", "Héctor",
    "Isabel", "Ignacio", "Jacobo", "Juliana", "Karen", "Kevin"
  ];
  
  // Función con algoritmo de dos punteros
  function buscarPareja() {
    let resultado = document.getElementById("resultado");
  
    for (let i = 0, j = 1; j < invitados.length; i++, j++) {
      const inicial1 = invitados[i][0].toUpperCase();
      const inicial2 = invitados[j][0].toUpperCase();
  
      if (inicial1 === inicial2) {
        const mensaje = `✅ ${invitados[i]} y ${invitados[j]} pueden sentarse juntos (ambos empiezan con "${inicial1}").`;
        resultado.textContent = mensaje;
        console.log(mensaje);
        return;
      }
    }
  
    const sinCoincidencias = "❌ No se encontró ningún par de invitados consecutivos con la misma inicial.";
    resultado.textContent = sinCoincidencias;
    console.log(sinCoincidencias);
  }
  