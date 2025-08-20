// Declarar un arreglo llamado frutas con varios tipos de frutas
let frutas = ["Manzana", "Platano", "Manzana", "Lulo", "Platano", "Lulo", "Manzana"];

// Crear un objeto para almacenar la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Usar un ciclo for para recorrer el arreglo y contar las frutas
for (let indice = 0; indice < frutas.length; indice++) {
    let fruta = frutas[indice];
    if (conteoFrutas[fruta]) { 
        // Si la fruta ya existe, incrementar el contador
        conteoFrutas[fruta]++; // conteoFrutas[fruta] = conteoFrutas[fruta] + 1;
    } else {
        conteoFrutas[fruta] = 1; 
        // Si la fruta no existe, inicializar el contador en 1
    }
}

// Imprimir en la consola la cantidad de cada tipo de fruta
console.log("Conteo de frutas usando ciclo for:");
for (let fruta in conteoFrutas) {
    console.log(`${fruta}: ${conteoFrutas[fruta]}`); // comillas invertidas o backticks 
}