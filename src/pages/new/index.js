import React from 'react';
import {TodoForm} from '../../components/TodoForm/TodoForm';
import { useTodos } from '../UseTodos';

function NewTodo() {

  const {addTodo} = useTodos();

  return (
    <>
      <TodoForm
      defaultTodoText = {""}
      label={"Escribe tu nuevo ToDo"}
      submitText={"Añadir"}
      submitEvent={(newText) => {
        addTodo(newText);
      }}
      >  
      </TodoForm>
    </>
  );
}

export {NewTodo};
