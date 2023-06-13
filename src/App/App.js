import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './UseTodos';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeItem
  } = useTodos();

  return (
    <div>
      <TodoHeader loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        >
        </TodoCounter>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        >
        </TodoSearch>
      </TodoHeader>

      <TodoList
        error={error}
        loading = {loading}
        searchedTodos = {searchedTodos}
        totalTodos = {totalTodos}
        searchValue = {searchValue}
        onError={
          () => <p>Error...</p>
        }
        onLoading={
          () => <p>Cargando...</p>
        }
        onEmptyTodos = {
          () => <p>Crear primer Todo</p>
        }
        onEmptySearchResults = {
          (searchText) => <p>No se encuentran todos para {searchText}</p>
        }
        render = {
          todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          )
        }
      />

      <CreateTodoButton
        setOpenModal={setOpenModal}
      ></CreateTodoButton>
      {openModal && (
        <Modal>
          <TodoForm
          addTodo = {addTodo}
          setOpenModal = {setOpenModal}
          >
          </TodoForm>
        </Modal>
      )}
      <ChangeAlert
      sincronizeItem = {sincronizeItem}
      />
    </div>
  );
}

export default App;
