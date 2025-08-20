function cambiarTexto() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola desde el DOM"
}

function cambiarColor() {
    let parrafor = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "blue";
    }
}

/* Selecciona todos los elemntos con la clase texto,
y luego usamos un bucle para cambiar de color todos
los parrafos seleccionados */

function ocultarParrafo() {
    //Seleccionamos
    let segundoParrafo = document.getElementsByTagName("p")[4];
    segundoParrafo.style.display = "none";
}

/* Seleccionamos todos los elemntos p y despues 
indicamos mediante el indice cual tomaremos [] */

function cambiarTextoDiv() {
    let parrafoDiv = document.querySelector("div p")
    parrafoDiv.textContent = "Texto cambiado dentro del DIV";
}

/* Selecciona el primer parrafo que se encuentra dentro de un DIV */

function marcarItems() {
    let items = document.querySelectorAll("li");
    items.forEach (item => {
        item.style.backgroundColor = "yellow";
    });
}

/* Selecciona todos los elementos li en la pagina y cambia su color de fondo a amarillo */