function encontrarMaximo(arr, inicio, fin) {
    if (inicio === fin) {
      return arr[inicio];
    }
  
    const medio = Math.floor((inicio + fin) / 2);
  
    const maxIzquierda = encontrarMaximo(arr, inicio, medio);
    const maxDerecha = encontrarMaximo(arr, medio + 1, fin);
  
    return Math.max(maxIzquierda, maxDerecha);
  }
  
  function buscarMaximo() {
    const input = document.getElementById("inputNumeros").value.trim();
    const resultado = document.getElementById("resultado");
  
    if (input === "") {
      resultado.textContent = "Por favor, ingresa una lista de números.";
      return;
    }
  
    const numeros = input
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));
  
    if (numeros.length === 0) {
      resultado.textContent = "No se encontraron números válidos.";
      return;
    }
  
    const maximo = encontrarMaximo(numeros, 0, numeros.length - 1);
    resultado.textContent = `El número máximo es: ${maximo}`;
    console.log(`Máximo encontrado: ${maximo}`);
  }
  