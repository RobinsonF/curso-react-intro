import './TodoCounter.css';
import React from 'react';

function TodoCounter({completedTodos, totalTodos, loading}){

    return (
      <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} tareas
      </h1>    
    );
  }

export {TodoCounter};