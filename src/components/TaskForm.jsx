import React, { useState } from 'react';

function TaskForm({ onAgregarTarea }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    onAgregarTarea(texto);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;