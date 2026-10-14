import React, { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React desde cero' },
    { id: 2, texto: 'Configurar Vite y componentes' }
  ]);
  const [textoInput, setTextoInput] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (textoInput.trim() === '') return;
    const nuevaTarea = {
      id: Date.now(),
      texto: textoInput
    };
    setTareas([...tareas, nuevaTarea]);
    setTextoInput('');
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3e8ff', // Fondo lila muy suave
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(147, 51, 234, 0.15)',
        width: '100%',
        maxWidth: '450px'
      }}>
        <h1 style={{ textAlign: 'center', color: '#6b21a8', marginBottom: '20px' }}>Notas / Tareas</h1>
        
        <form onSubmit={agregarTarea} style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
          <input
            type="text"
            placeholder="Escribe una nueva tarea..."
            value={textoInput}
            onChange={(e) => setTextoInput(e.target.value)}
            style={{
              flex: '1',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #d8b4fe',
              outline: 'none',
              fontSize: '14px'
            }}
          />
          <button type="submit" style={{
            backgroundColor: '#7c3aed',
            color: '#ffffff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            + Crear nota
          </button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tareas.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#9ca3af' }}>No hay tareas pendientes.</p>
          ) : (
            tareas.map((tarea) => (
              <li key={tarea.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #f3f4f6'
              }}>
                <span style={{ color: '#374151', fontSize: '15px' }}>{tarea.texto}</span>
                <button 
                  onClick={() => eliminarTarea(tarea.id)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  🗑️ Eliminar
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;