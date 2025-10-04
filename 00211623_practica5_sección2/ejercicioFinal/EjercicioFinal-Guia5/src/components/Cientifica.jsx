import React from 'react';

function Cientifica({ nombre, profesion, premios, descubrimiento, imagen }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <img src={imagen} alt={`Foto de ${nombre}`} />
      <ul className="info-list">
        <li><strong>Profesión:</strong> {profesion}</li>
        <li><strong>Premios:</strong> {premios.length} ({premios.join(', ')})</li>
        <li><strong>Descubrió:</strong> {descubrimiento}</li>
      </ul>
    </div>
  );
}

export default Cientifica;