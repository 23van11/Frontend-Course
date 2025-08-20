// Funciones
// Palabra reservada function + nombre de la función + parámetros
function Sumar(numero1, numero2){ 
    let total = numero1 + numero2;
    return total;
}

//Llamada a mi funcion 
let resultado = Sumar(10,10);
// return nos permite guardar el resultado en una variable

console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3); // Se ejecuta pero no se imprime nada

function Saludar(nombre){
    console.log("Hola, bienvenido/a " + nombre); // Concatenar
}

Saludar("Carolina");
Saludar("Monserrat");

console.log(Sumar(2,3));

function Restar(a,b){
    let total = a -b; 
    console.log(total); // Con console.log SOLO se imprime en consola
}
//No se guarda el resultado en una variable
Restar(13,2);

function Casita(){ // No recibe parametros (datos de entrada)
    let nombre = "Ana"; // Variable local
    let apellido = "Villanueva";
    console.log("Esta es una casita.");
}

Casita();

// console.log(nombre); // No se puede acceder porque esta dentro de una funcion 
// Scope de bloque

let nombre = "Vanessa"; // Variable global
let edad = 23;
let ciudad = "Ciudad de Mexico"; 

console.log( "Ella se llama " + nombre + " tiene " + edad + " años y vive en " + ciudad);

console.log (`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`) 
// Ctrl + Alt + } 
// Actualizacion de ES6 (2015)

// Pedir datos al usuario
let usuario = prompt("Cual es tu nombre?"); // Los datos se guardan en string
let gatos = prompt("¿Cuantos gatos tienes?"); 
let perros = prompt("Cuantos perros tienes?"); 


let total = parseInt(gatos) + parseInt(perros); // Convertir string a numero
let total_2 = Number(gatos) + Number(perros); // Convertir string a numero
// Vemos los datos en consola
console.log(` ${usuario} tiene ${gatos} gatos y ${perros} perros.`);

// Vemos los datos en pop up
alert(`${usuario} tiene ${gatos} gatos y ${perros} perros, en total tiene ${total} mascotas.`);

// Vemos los datos en la pagina
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas.`);