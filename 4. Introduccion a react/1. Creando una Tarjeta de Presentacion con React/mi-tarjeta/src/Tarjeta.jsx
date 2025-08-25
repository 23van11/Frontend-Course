import React from 'react';

function Tarjeta() {
  const nombre = "Vanessa Sandoval";
  const profesion = "Desarrolladora Web Full Stack";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";
  const fotoPerfil = "https://media.licdn.com/dms/image/v2/C4D03AQFd1mjaQ7zPyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1623268932125?e=1758758400&v=beta&t=ybV1Lgek85wU-1QZgLLHgz0ZIx7zLIl6YjEBMqz3BF0";
  const linkedin = "https://mx.linkedin.com/in/vanessa-segundo-sandoval";
  const github = "https://github.com/23van11";

  const habilidades = ["React", "JavaScript", "HTML", "CSS", "Node.js"];

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '25px',
      width: '350px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fdfdfd',
      margin: 'auto',
    }}>
      <img
        src={fotoPerfil}
        alt="Foto de perfil"
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }}
      />
      <h2 style={{ margin: '10px 0', color: '#2c3e50' }}>{nombre}</h2>
      <h4 style={{ margin: '5px 0', color: '#34495e' }}>{profesion}</h4>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{mensaje}</p>

      <div style={{ marginTop: '15px' }}>
        <h5 style={{ color: '#2c3e50' }}>Habilidades</h5>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {habilidades.map((hab, i) => (
            <li key={i} style={{
              backgroundColor: '#ecf0f1',
              padding: '5px 10px',
              borderRadius: '8px',
              fontSize: '0.9em'
            }}>
              {hab}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', textDecoration: 'none', color: '#0077b5' }}>
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Tarjeta;
