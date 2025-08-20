// Problema: Crear objeto a partir de un Libro

// Definimos el objeto libro
let libro = {
    // Propiedades del libro
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: [], // Lista de capítulos, inicialmente vacía
    
    // Método para describir el libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    
    // Método para agregar un capítulo
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },
    
    // Método para eliminar un capítulo
    eliminarCapitulo: function(capitulo) {
        let index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encuentra en la lista.`);
        }
    },
    
    // Método para mostrar los capítulos
    mostrarCapitulos: function() {
        if (this.capitulos.length > 0) {
            console.log("Capítulos del libro:");
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        } else {
            console.log("No hay capítulos añadidos.");
        }
    }
};

// Ejemplo de uso:
libro.describirLibro(); // Imprime la descripción básica del libro

// Agregar capítulos
libro.agregarCapitulo("Capítulo 1: La casa de los Buendía");
libro.agregarCapitulo("Capítulo 2: El coronel Aureliano Buendía");

// Mostrar capítulos
libro.mostrarCapitulos();

// Eliminar un capítulo
libro.eliminarCapitulo("Capítulo 1: La casa de los Buendía");

// Mostrar capítulos nuevamente
libro.mostrarCapitulos();
