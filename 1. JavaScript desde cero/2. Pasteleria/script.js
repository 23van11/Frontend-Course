//Traer todo lo del ID

document.addEventListener('DOMContentLoaded', () =>{
    //Obtencion de elementos del DOM por su ID de las secciones
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto = document.getElementById('contacto');

    //Obtencion de elementos del DOM por su ID del menu de navegacion
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');

    //Obtencion de elementos del DOM para el carrito de compras
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0; // Variable para almacenar el total del carrito

    //Obtencion de los elementos del DOM para el formulario
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    //Evento para mostrar la seccion de inicio y ocultar las demas
    menuInicio.addEventListener('click', (e) =>{
        e.preventDefault(); // Evitar un comportamiento por defecto
        inicio.style.display = 'block'; // Mostrar
        productos.style.display = 'none'; // Ocultar
        contacto.style.display = 'none'; // Ocultar
    });

    //Evento para mostrar la seccion de Menu y ocultar las demas
    menuProductos.addEventListener('click', (e) =>{
        e.preventDefault(); // Evitar un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });

    //Evento para mostrar la seccion de Contacto y ocultar las demas
    menuContacto.addEventListener('click', (e) =>{
        e.preventDefault(); // Evitar un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });


    // Evento paara agregar productos al carrito
    productos.addEventListener('click', (event) =>{
        if (event.target.classList.contains('agregar-carrito')){ // Verifica si el click fue en el boton agregar carrito
            const nombre = event.target.dataset.nombre; //Obtiene el nombre del producto
            const precio = parseInt(event.target.dataset.precio); // Obtiene el precio del producto

            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio; // Suma el precio de los productos
            console.log(total);
            actualizarTotalCarrito(); // Actualiza el total del carrito
        }
            // target - Es una propiedad que despliega el elemento que desencadeno 
             // classList - Nos permite acceder a las clases de un elemento
    });

    // Ejemplo de queryselector para manipular el total del carrito 
    const totalElemento = document.querySelector('#total-carrito');
    function actualizarTotalCarrito(){
        totalElemento.textContent = total;
    }

    // Titulo del carrito con querySelector
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Sus pasteles:';

    //Simular envio de nuestro formulario
    formularioContacto.addEventListener('submit', function(event){
        event.preventDefault(); // Evitar el comportamiento por defecto 
        formularioContacto.style.display = 'none'; // Ocultar el formulario
        mensajeEnviado.style.display = 'block'; // Mostrar el mensaje de enviado
    }); 

    //Ejemplo con querySelector para mostrar el precio del producto
    productos.addEventListener('mouseover', (e) =>{
        if( e.target.classList.contains('producto')){
            const precio = e.target.querySelector('.agregar-carrito').dataset.precio; // Encuentra el precio dentro del producto (en el boton)
            e.target.setAtribute('title', `Precio: $${precio}`); // Lo muestra como tooltip
        }
    });

});