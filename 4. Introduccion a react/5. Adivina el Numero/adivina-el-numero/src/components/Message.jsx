import React from 'react';

function Message({ mensaje }) {
  return (
    <div className="message">
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Message;
