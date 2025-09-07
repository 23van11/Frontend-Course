import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // archivo separado para estilos

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Usuario y contraseña "válidos" predefinidos
    if (username === "admin" && password === "1234") {
      setError("");
      onLogin(username);
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="twitter-logo">Twitter</h1>
        <h2 className="login-title">Inicia sesión en Twitter</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p className="note">Usuario: <strong>admin</strong> | Contraseña: <strong>1234</strong></p>
      </div>
    </div>
  );
};

export default Login;
