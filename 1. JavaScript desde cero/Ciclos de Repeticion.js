// Programa para mostrar los multiplos de 5 hasta un numero dado por el usuario

let numero = 20;

let contador = 1; 

while(contador <= numero){
    // Codigo a iterar
    if(contador % 5 === 0){
        console.log(contador);
    }
    contador++;
}

console.log("Fin del programa");

// Numeros impares 

let numero2 = 35;

for(let indice = 0; indice <= numero2; indice++){
    if(indice % 2 !== 0){
        console.log(indice);
    }
}

console.log("Fin del programa");

// Imprimir los numero del 1 al 10 

let inicio = 0; // Inicializacion
//Bucle while, cuando NO sabemos cuantas veces se va repetir el codigo

while(inicio <= 10){ // Condicion
    console.log(inicio); // Codigo a iterar
    inicio++;
}

console.log("Fin del programa");

// Bucle for, ya sabemos cuantas veces se va repetir el codigo
// Para arreglos
for (let i = 1; i <= 10; i++){
    console.log(i); // Imprimiendo el valor actual de i
}