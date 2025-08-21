const regalos = [
    "calcetines",
    "pelota",
    "libro",
    "bicicleta",
    "rompecabezas",
    "chocolates",
    "bufanda",
    "videojuego",
    "tablet",
    "audífonos"
  ];
  
  const ul = document.getElementById("listaRegalos");
  regalos.forEach((regalo) => {
    const li = document.createElement("li");
    li.textContent = regalo;
    ul.appendChild(li);
  });
  
  // Función recursiva para buscar un regalo
  function buscarRegalo(lista, nombre, index = 0) {
    if (index === lista.length) {
      return `El regalo "${nombre}" no está en la lista.`;
    }
    if (lista[index].toLowerCase() === nombre.toLowerCase()) {
      return `El regalo "${nombre}" se encuentra en la posición ${index + 1}.`;
    }
    return buscarRegalo(lista, nombre, index + 1);
  }
  
  function buscar() {
    const nombre = document.getElementById("inputRegalo").value.trim();
    const resultado = document.getElementById("resultado");
  
    if (nombre === "") {
      resultado.textContent = "Por favor, escribe el nombre del regalo.";
      return;
    }
  
    const mensaje = buscarRegalo(regalos, nombre);
    resultado.textContent = mensaje;
    console.log(mensaje);
  }
  