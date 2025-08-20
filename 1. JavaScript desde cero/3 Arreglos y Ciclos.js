// Problema: Clasificación de Frutas

// Ciclo For

// Declarar un arreglo de frutas
let frutas = ['manzana', 'banana', 'manzana', 'naranja', 'banana', 'manzana', 'pera', 'naranja', 'pera', 'pera'];

// Crear un objeto para almacenar la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Usar un ciclo 'for' para recorrer el arreglo y contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya existe en el objeto, aumentamos su contador
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si la fruta no existe, la agregamos al objeto con valor 1
        conteoFrutas[fruta] = 1;
    }
}

// Imprimir el conteo de frutas
console.log(conteoFrutas);

/*

// Ciclo While

let frutas = ['manzana', 'banana', 'manzana', 'naranja', 'banana', 'manzana', 'pera', 'naranja', 'pera', 'pera'];

let conteoFrutas = {};

let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }

    i++;
}

console.log(conteoFrutas);

*/