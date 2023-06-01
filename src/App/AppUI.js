import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
  }){
    return(
        <div>
        <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
  
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
  
        <CreateTodoButton></CreateTodoButton>
      </div>
    );
   
}

export { AppUI };