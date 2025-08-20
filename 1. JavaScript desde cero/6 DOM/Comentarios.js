// Seleccionamos los elementos del DOM
const formulario = document.getElementById('formComentario');
const comentarioInput = document.getElementById('comentarioInput');
const comentariosList = document.getElementById('comentariosList');

// Función para agregar un comentario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const comentarioTexto = comentarioInput.value.trim(); // Obtenemos el texto del comentario

    // Verificamos que el comentario no esté vacío
    if (comentarioTexto !== '') {
        const fecha = new Date(); // Fecha y hora actual
        const fechaFormato = `${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`;

        // Creamos un nuevo div para el comentario
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');

        // Creamos el contenido del comentario
        nuevoComentario.innerHTML = `
            <p>${comentarioTexto}</p>
            <p class="fecha">Publicado el: ${fechaFormato}</p>
            <button class="boton-eliminar">Eliminar</button>
        `;

        // Agregamos el comentario al contenedor de comentarios
        comentariosList.appendChild(nuevoComentario);

        // Agregamos el evento para eliminar el comentario
        const botonEliminar = nuevoComentario.querySelector('.boton-eliminar');
        botonEliminar.addEventListener('click', function() {
            comentariosList.removeChild(nuevoComentario);
        });

        // Limpiamos el campo de texto
        comentarioInput.value = '';
    } else {
        alert('Por favor, escribe un comentario antes de agregarlo.');
    }
});
