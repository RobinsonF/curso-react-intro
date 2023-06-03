import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

    return (
      <h1 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} tareas
      </h1>    
    );
  }

export {TodoCounter};