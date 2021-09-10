import React from "react";

const TodoItem = ({
  id,
  todo,
  onTaskComplete,
  onTaskDelete,
  onMove,
  isPrevious,
  isNext,
}) => {
  return (
    <li>
      <div className="content">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => onTaskComplete(id)}
        />
        <span>{todo.text}</span>
      </div>
      <button className="danger" onClick={() => onTaskDelete(id)}>
        Delete
      </button>
      <button
        className="main small"
        onClick={() => !isPrevious && onMove(id, "up")}
        disabled={isPrevious}
      >
        Up
      </button>
      <button
        className="main small"
        onClick={() => !isNext && onMove(id, "down")}
        disabled={isNext}
      >
        Down
      </button>
    </li>
  );
};

export default TodoItem;
