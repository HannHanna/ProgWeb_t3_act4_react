import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tareas, onEliminarTarea }) {
  if (tareas.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No hay tareas registradas.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          onEliminarTarea={onEliminarTarea}
        />
      ))}
    </ul>
  );
}

export default TaskList;