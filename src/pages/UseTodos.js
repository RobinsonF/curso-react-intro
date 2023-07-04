import React from "react";
import { useLocalStorage } from "./UseLocalStorage";
import { useNavigate } from "react-router-dom";

function useTodos() {

    const navigate = useNavigate();

    const {
        item: todos,
        saveItems: saveTodos,
        sincronizeItem: sincronizeItem,
        loading,
        error } = useLocalStorage('TODOS_V2', []);

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(element => element.completed === true).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        todo => {
            return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        }
    );

    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
            id,
        })
        saveTodos(newTodos);
    }

    const getTodo = (id) => {
        const todo = todos.find(
            item => item.id === id
        );
        return todo;
    }

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            item => item.id === id
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const onEditTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            item => item.id === id
        );
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            item => item.id === id
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const editTodo = (todo) => {
        navigate('/edit/' + todo.id, 
        {
            state: {todo}
        });
    }

    return {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        editTodo,
        onEditTodo,
        loading,
        error,
        addTodo,
        getTodo,
        sincronizeItem
    };
}

const newTodoId = (todoList) => {
    if(todoList.length === 0){
        return 1;
    }
    const ids = todoList.map(todo => todo.id);
    const idMax = Math.max(...ids);
    return idMax + 1;
}

export { useTodos };