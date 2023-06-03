import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext/TodoContext';
import React from "react";
import {Modal} from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';



function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <div>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Error...</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crear primer Todo</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton
      setOpenModal={setOpenModal}
      ></CreateTodoButton>
      {openModal && (
        <Modal>
          <TodoForm>
            
          </TodoForm>
        </Modal>
      )}
    </div>
  );

}

export { AppUI };