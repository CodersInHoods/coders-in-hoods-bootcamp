import React, { useState } from "react";

const NewTodoForm = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();

    onFormSubmit(inputValue);
    setInputValue("");
  };

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input
        onChange={inputChangeHandler}
        type="text"
        placeholder="Add new todo..."
        value={inputValue}
        required
      />
      <button className="main" type="submit">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
