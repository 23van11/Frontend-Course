// Datos iniciales 
let biblioteca = {
    libros: [
      { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
      { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: true }
    ]
  };
  
  // Simulación de lectura de JSON 
  function leerDatos(callback) {
    setTimeout(() => {
      callback(biblioteca);
    }, 1000);
  }
  
  // Simulación de escritura en JSON 
  function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
      biblioteca = nuevosDatos;
      callback();
    }, 1000);
  }
  
  // Mostrar libros
  function mostrarLibros() {
    leerDatos((datos) => {
      console.log("\n📚 Inventario de libros:");
      datos.libros.forEach((libro, index) => {
        const estado = libro.disponible ? " Disponible" : " Prestado";
        console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} [${estado}]`);
      });
    });
  }
  
  // Agregar libro
  function agregarLibro(titulo, autor, genero, disponible) {
    leerDatos((datos) => {
      const nuevoLibro = { titulo, autor, genero, disponible };
      datos.libros.push(nuevoLibro);
      escribirDatos(datos, () => {
        console.log(`\n Libro agregado: "${titulo}"`);
      });
    });
  }
  
  // Actualizar disponibilidad
  function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {
      const libro = datos.libros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
      if (libro) {
        libro.disponible = nuevoEstado;
        escribirDatos(datos, () => {
          console.log(`\n Estado actualizado para "${titulo}": ${nuevoEstado ? "Disponible" : "Prestado"}`);
        });
      } else {
        console.log(`\n Libro "${titulo}" no encontrado.`);
      }
    });
  }
  
  // Ejecución de prueba 
  mostrarLibros();
  
  setTimeout(() => {
    agregarLibro("El Principito", "Antoine de Saint-Exupéry", "Fábula", true);
  }, 2000);
  
  setTimeout(() => {
    actualizarDisponibilidad("1984", false);
  }, 4000);
  
  setTimeout(() => {
    mostrarLibros();
  }, 6000);
  