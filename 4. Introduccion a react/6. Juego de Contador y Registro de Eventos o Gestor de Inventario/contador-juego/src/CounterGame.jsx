import { useReducer, useRef, useEffect, useCallback } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
        history: [...state.history, `+${action.payload} (Nuevo valor: ${state.count + action.payload})`],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
      };
    case "reset":
      return initialState;
    case "undo":
      if (state.history.length === 0) return state;
      const last = state.history[state.history.length - 1];
      const newCount = last.includes("+")
        ? state.count - parseInt(last.match(/\+(\d+)/)[1])
        : state.count + 1;
      return {
        count: newCount,
        history: state.history.slice(0, -1),
      };
    case "load":
      return action.payload;
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("counter-game");
    if (saved) {
      dispatch({ type: "load", payload: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter-game", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  const handleIncrement = useCallback(() => {
    const value = parseInt(inputRef.current.value, 10);
    dispatch({ type: "increment", payload: isNaN(value) ? 1 : value });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  return (
    <div className="counter-container">
      <h2>Contador: <span className="count">{state.count}</span></h2>

      <input ref={inputRef} type="number" placeholder="Valor a incrementar" className="input-num" />
      <div className="button-group">
        <button ref={incrementBtnRef} onClick={handleIncrement} className="btn increment">+</button>
        <button onClick={handleDecrement} className="btn decrement">-</button>
        <button onClick={() => dispatch({ type: "reset" })} className="btn reset">Reset</button>
        <button onClick={() => dispatch({ type: "undo" })} className="btn undo">Deshacer</button>
      </div>

      <h3>Historial:</h3>
      <ul className="history-list">
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterGame;
