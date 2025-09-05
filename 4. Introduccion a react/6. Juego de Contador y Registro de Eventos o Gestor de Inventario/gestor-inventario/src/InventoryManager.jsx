import { useReducer, useRef, useCallback, useEffect, useState } from "react";

const initialState = { products: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        products: [...state.products, {
          id: Date.now(),
          name: action.name,
          quantity: 1
        }]
      };
    case "increment":
      return {
        products: state.products.map(p =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      };
    case "decrement":
      return {
        products: state.products.map(p =>
          p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
        )
      };
    case "remove":
      return {
        products: state.products.filter(p => p.id !== action.id)
      };
    case "clear":
      return { products: [] };
    case "load":
      return action.payload;
    default:
      return state;
  }
}

function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("inventory");
    if (saved) {
      dispatch({ type: "load", payload: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(state));
  }, [state]);

  const handleAddProduct = () => {
    const value = inputRef.current.value.trim();
    if (value !== "") {
      dispatch({ type: "add", name: value });
      inputRef.current.value = "";
    }
  };

  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  const filteredProducts = state.products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inventory-container">
      <div className="input-group">
        <input ref={inputRef} type="text" placeholder="Nombre del producto" />
        <button onClick={handleAddProduct}>Agregar Producto</button>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => dispatch({ type: "clear" })}>Vaciar Inventario</button>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-products">No hay productos que coincidan.</p>
      ) : (
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              <span>{product.name} - Cantidad: {product.quantity}</span>
              <div className="product-buttons">
                <button onClick={() => handleIncrement(product.id)}>+</button>
                <button onClick={() => handleDecrement(product.id)} disabled={product.quantity <= 1}>-</button>
                <button onClick={() => handleRemove(product.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InventoryManager;
