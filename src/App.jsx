import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Instalar entorno de Vite y React' },
    { id: 2, texto: 'Crear componentes con props y estado' }
  ]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header titulo="Lista de Tareas React" totalTareas={tareas.length} />
      <TaskForm onAgregarTarea={agregarTarea} />
      <TaskList tareas={tareas} onEliminarTarea={eliminarTarea} />
    </div>
  );
}

export default App;