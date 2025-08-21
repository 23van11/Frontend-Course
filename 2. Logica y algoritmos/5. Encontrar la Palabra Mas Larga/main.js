function encontrarPalabraMasLarga() {
    const texto = document.getElementById("inputTexto").value.trim();
  
    if (texto === "") {
      document.getElementById("resultado").textContent = "Por favor, escribe un párrafo.";
      return;
    }
  
    const palabras = texto.split(' ');
    let palabraMasLarga = "";
    let maxLongitud = 0;
  
    for (let i = 0; i < palabras.length; i++) {
      const palabraLimpia = palabras[i].replace(/[.,!?;:()]/g, '');
      if (palabraLimpia.length > maxLongitud) {
        maxLongitud = palabraLimpia.length;
        palabraMasLarga = palabraLimpia;
      }
    }
  
    document.getElementById("resultado").textContent =
      `La palabra más larga es: "${palabraMasLarga}" (${maxLongitud} letras)`;
  
    console.log(`Palabra más larga encontrada: ${palabraMasLarga}`);
  }
  