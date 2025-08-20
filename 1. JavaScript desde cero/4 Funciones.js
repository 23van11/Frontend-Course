// Crear un arreglo para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al arreglo
function agregarLibro(titulo) {
    librosLeidos.push(titulo); // Agregamos el título al arreglo
    console.log(`Libro "${titulo}" agregado a la lista.`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros que has leído:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

agregarLibro("Cien Años de Soledad");
agregarLibro("Cosmos");
agregarLibro("Historia del tiempo");
agregarLibro("LOs dragones de Edén")


mostrarLibrosLeidos();
