import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, onTaskComplete, onTaskDelete, onMove }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        const position = todos.length - 1 - index;

        return (
          <TodoItem
            id={position}
            key={index}
            todo={todo}
            onTaskComplete={onTaskComplete}
            onTaskDelete={onTaskDelete}
            onMove={onMove}
            isPrevious={!todos[index - 1]}
            isNext={!todos[index + 1]}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

export default TodoList;
