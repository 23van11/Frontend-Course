import React, { useEffect } from 'react';

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);
    return () => console.log(`¡El planeta ${nombre} ha desaparecido!`);
  }, []);

  return (
    <div style={{ margin: '10px 0', padding: '5px 10px', backgroundColor: '#002244', borderRadius: '8px' }}>
      🌐 {nombre}
    </div>
  );
}

export default Planeta;
