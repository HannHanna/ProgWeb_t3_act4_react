import React from 'react';

function Header({ titulo, totalTareas }) {
  return (
    <header style={{ textAlign: 'center', marginMB: '20px' }}>
      <h1>{titulo}</h1>
      <p>Tareas pendientes: <strong>{totalTareas}</strong></p>
    </header>
  );
}

export default Header;