// Tipo de mascotas = Gato, Perro, Hamster 

// Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

let tipoDeMascota = "Elefante"; 

if (tipoDeMascota === "Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande.")
} else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana.")
}else if (tipoDeMascota === "Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña.")
}else{ // ELSE es el bloque falso (se ejecuta si no se cumple ninguna de las condiciones anteriores)
    console.log("No contamos con jaulas para esa mascota.")
}

// Semaforo color = Rojo, Amarillo, Verde 
// Rojo = Alto, Amarillo = Detente, Verde = Siga

let edad = 17;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// Para poder obtener una beca

let creditos = 10; // Minimo 10 creditos
let promedio = 7.5; // Minimo 8.5

if(creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca");
}else{
    console.log("No tienes derecho a una beca");
}

// Agregar el mensaje de - Te hacen falta creditos 
// Agregar el mensaje de - Tu promedio debe subir
let nota = 30.0; // Puedes cambiar este valor para probar diferentes casos

if (nota === "") {
    console.log("No pusiste la nota");
} else if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Bien");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("No apruebas");
}