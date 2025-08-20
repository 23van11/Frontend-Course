document.addEventListener('DOMContentLoaded', iniciarApp);
/* DOMContentLoaded: */

/* DOMContentListener: */

function iniciarApp(){
    const productoInput = document.getElementById('producto');
    const agregarButton = document.getElementById('agregar');
    const listaCompras = document.getElementById('lista-compras');

    /* getElementById: */
    let productos = [];

    agregarButton.addEventListener()('click', function(){
        agregarProducto(productos, productoInput, listaCompras);
    });
}

function agregarProducto (productos, productoInput, listaCompras){
    const nombreProducto = productoInput.value.trim();
    if(nombreProducto){
        const nuevoProducto = {
            nombre: nombreProducto,
            comprado: false
        };
        productos.push(nuevoProducto);
        mostrarProductos(nuevoProducto, listaCompras);
        productoInput.value = '';
    }
}

/* value: */


/* trim(): */

/* appendChild: */

function mostrarProductos(producto, listaCompras){
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = producto.nombre;
    listaCompras.appendChild(nuevoItem);

}