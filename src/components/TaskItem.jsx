import React from 'react';

function TaskItem({ tarea, onEliminarTarea }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
      <span>{tarea.texto}</span>
      <button onClick={() => onEliminarTarea(tarea.id)} style={{ color: 'red', cursor: 'pointer' }}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;