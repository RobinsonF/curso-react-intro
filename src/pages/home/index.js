import React from 'react';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoHeader } from '../../components/TodoHeader';
import { useTodos } from '../UseTodos';
import { ChangeAlert } from '../../components/ChangeAlert';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    editTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    sincronizeItem
  } = useTodos();

  const navigate = useNavigate();

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
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={
          () => <p>Error...</p>
        }
        onLoading={
          () => <p>Cargando...</p>
        }
        onEmptyTodos={
          () => <p>Crear primer Todo</p>
        }
        onEmptySearchResults={
          (searchText) => <p>No se encuentran todos para {searchText}</p>
        }
        render={
          todo => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onEdit={() => editTodo(todo)}
            />
          )
        }
      />
    
      <CreateTodoButton
      onClick={()=>{
        navigate('/new');
      }}
      // setOpenModal={setOpenModal}
      ></CreateTodoButton>
      <ChangeAlert
        sincronizeItem={sincronizeItem}
      />
    </div>
  );
}

export { Home };
