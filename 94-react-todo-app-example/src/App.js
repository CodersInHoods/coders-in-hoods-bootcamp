import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import NewTodoForm from "./Components/NewTodoForm";
/**
 * 1. NewTodoForm
 * 2. todos list
 * 3. todo item
 */

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    const newTodo = {
      text: todo,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const taskCompleteHandler = (index) => {
    const localTodos = [...todos];

    localTodos[index].complete = !localTodos[index].complete;
    setTodos(localTodos);
  };

  const taskDeleteHandler = (index) => {
    const localTodos = [...todos];

    localTodos.splice(index, 1);
    setTodos(localTodos);
  };

  const moveHandler = (index, direction) => {
    const localTodos = [...todos];
    const itemToMore = todos[index];
    localTodos.splice(index, 1);

    if (direction === "up") {
      localTodos.splice(index + 1, 0, itemToMore);
    } else if (direction === "down") {
      localTodos.splice(index - 1, 0, itemToMore);
    }

    setTodos(localTodos);
  };

  const todosToRender = [...todos].reverse();

  return (
    <div className="app">
      <NewTodoForm onFormSubmit={addNewTodo}></NewTodoForm>
      <TodoList
        todos={todosToRender}
        onTaskComplete={taskCompleteHandler}
        onTaskDelete={taskDeleteHandler}
        onMove={moveHandler}
      ></TodoList>
    </div>
  );
}

export default App;
