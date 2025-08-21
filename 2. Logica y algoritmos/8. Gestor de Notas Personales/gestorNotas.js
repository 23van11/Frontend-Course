const fs = require('fs');

const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  // Verificamos si ya existe una nota con el mismo título
  const existe = notas.some(nota => nota.titulo === titulo);
  if (existe) {
    console.log(`Ya existe una nota con el título "${titulo}".`);
    return;
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('✅ Nota agregada con éxito.');
}

function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    if (notas.length === 0) {
      console.log("📭 No hay notas guardadas.");
      return;
    }

    console.log('📒 Tus notas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log('📭 No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter(nota => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
      console.log(`No se encontró una nota con el título "${titulo}".`);
      return;
    }

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`🗑️ Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('📭 No hay notas para eliminar.');
  }
}


// Uso desde consola:
// node gestorNotas.js crear "titulo" "contenido"
// node gestorNotas.js listar
// node gestorNotas.js eliminar "titulo"

const [,, accion, ...args] = process.argv;

switch (accion) {
  case 'crear':
    const [tituloCrear, ...contenidoArr] = args;
    const contenido = contenidoArr.join(' ');
    agregarNota(tituloCrear, contenido);
    break;

  case 'listar':
    listarNotas();
    break;

  case 'eliminar':
    const [tituloEliminar] = args;
    eliminarNota(tituloEliminar);
    break;

  default:
    console.log('❓ Comandos disponibles:');
    console.log('  node gestorNotas.js crear "Título" "Contenido de la nota"');
    console.log('  node gestorNotas.js listar');
    console.log('  node gestorNotas.js eliminar "Título"');
}
