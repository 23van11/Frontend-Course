const productosDisponibles = [
    { nombre: "Espresso", precio: 30 },
    { nombre: "Americano", precio: 35 },
    { nombre: "Cappuccino", precio: 45 },
    { nombre: "Latte", precio: 50 },
    { nombre: "Moka", precio: 55 },
    { nombre: "Frappé", precio: 60 }
  ];
  
  let listaDeCompras = [];
  
  window.onload = () => {
    const select = document.getElementById("productoSelect");
    productosDisponibles.forEach((producto) => {
      const option = document.createElement("option");
      option.value = producto.nombre;
      option.textContent = `${producto.nombre} - $${producto.precio}`;
      select.appendChild(option);
    });
  
    mostrarLista();
  };
  
  const agregarProductoDesdeSelect = () => {
    const select = document.getElementById("productoSelect");
    const productoNombre = select.value;
  
    const producto = productosDisponibles.find(p => p.nombre === productoNombre);
  
    if (!listaDeCompras.some(p => p.nombre === productoNombre)) {
      listaDeCompras.push(producto);
      mostrarLista();
    } else {
      alert("Este café ya fue agregado.");
    }
  };
  
  const eliminarProductoDesdeSelect = () => {
    const select = document.getElementById("productoSelect");
    const productoNombre = select.value;
  
    const index = listaDeCompras.findIndex(p => p.nombre === productoNombre);
  
    if (index !== -1) {
      listaDeCompras.splice(index, 1);
      mostrarLista();
    } else {
      alert("Este café no está en la lista.");
    }
  };
  
  const mostrarLista = () => {
    const listaUl = document.getElementById("listaProductos");
    const totalSpan = document.getElementById("totalPagar");
    listaUl.innerHTML = "";
  
    let total = 0;
  
    listaDeCompras.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      listaUl.appendChild(li);
      total += producto.precio;
    });
  
    totalSpan.textContent = total.toFixed(2);
  };
  