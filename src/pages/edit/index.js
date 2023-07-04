import React from 'react';
import { TodoForm } from '../../components/TodoForm/TodoForm';
import { useTodos } from '../UseTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodo() {

  const location = useLocation();

  const {onEditTodo, getTodo, loading} = useTodos();
  const params = useParams();
  const id = Number(params.id);

  let todoText;

  if(location.state?.todo){
    todoText = location.state.todo.text;
  } else if(loading){
    <p>Cargando...</p>
  }else{
    const todo = getTodo(id);
    todoText = todo.text;
  }  
  return (
    <>
     <TodoForm
     defaultTodoText={todoText}
     label={"Edita tu nuevo ToDo"}
     submitText={"Editar"}
     submitEvent={(newText) => {
       onEditTodo(id, newText);
     }}
     >  
     </TodoForm>
   </>
 );
}

export {EditTodo};
