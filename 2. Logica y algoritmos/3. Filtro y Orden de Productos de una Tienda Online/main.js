const productos = [
    { nombre: "Espresso", precio: 35, categoria: "Caliente" },
    { nombre: "Frappé", precio: 65, categoria: "Frío" },
    { nombre: "Americano", precio: 40, categoria: "Caliente" },
    { nombre: "Latte", precio: 55, categoria: "Caliente" },
    { nombre: "Té Verde", precio: 25, categoria: "Té" },
    { nombre: "Café de Olla", precio: 20, categoria: "Tradicional" },
    { nombre: "Moka", precio: 70, categoria: "Caliente" },
    { nombre: "Smoothie", precio: 95, categoria: "Frío" },
    { nombre: "Cold Brew Especial", precio: 110, categoria: "Frío" },
    { nombre: "Latte de Avellana", precio: 120, categoria: "Caliente" },
    { nombre: "Matcha Latte", precio: 105, categoria: "Té" },
    { nombre: "Frappuccino Deluxe", precio: 150, categoria: "Frío" }
  ];
  
  function procesarProductos() {
    console.clear();
  
    // 1. filter()
    const productosBaratos = productos.filter(p => p.precio < 100);
    console.log("📦 Productos menores a $100:");
    console.table(productosBaratos);
  
    // 2. sort()
    const productosOrdenados = [...productosBaratos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    console.log("🔠 Ordenados alfabéticamente:");
    console.table(productosOrdenados);
  
    // 3. map()
    const nombresProductos = productosOrdenados.map(p => p.nombre);
    console.log("📋 Nombres:");
    console.log(nombresProductos);
  
    // 4. reduce()
    const total = productosBaratos.reduce((acc, p) => acc + p.precio, 0);
    console.log("💰 Total:");
    console.log(`$${total.toFixed(2)}`);
  
    // 5. some()
    const hayFrios = productos.some(p => p.categoria === "Frío");
  
    // 6. every()
    const todosBaratos = productos.every(p => p.precio < 100);
  
    mostrarLista("productos-baratos", productosBaratos.map(p => `${p.nombre} - $${p.precio}`));
    mostrarLista("productos-ordenados", productosOrdenados.map(p => `${p.nombre} - $${p.precio}`));
    mostrarLista("nombres-productos", nombresProductos);
    document.getElementById("total-baratos").textContent = `$${total.toFixed(2)}`;
    document.getElementById("hay-frios").textContent = hayFrios ? "✅ Sí hay productos fríos." : "❌ No hay productos fríos.";
    document.getElementById("todos-baratos").textContent = todosBaratos ? "✅ Sí, todos cuestan menos de $100." : "❌ No, hay productos caros.";
  }
  
  function mostrarLista(id, lista) {
    const ul = document.getElementById(id);
    ul.innerHTML = "";
    lista.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }
  