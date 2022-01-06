import React, { useState, useRef, useEffect } from "react";

const TodoForm = ({ onSubmit, edit }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {edit ? (
        <div>
          <input
            type="text"
            className="todo-input edit"
            name="text"
            value={input}
            placeholder="Update Your Todo"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Update Todo</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            className="todo-input"
            name="text"
            value={input}
            placeholder="Add A Todo"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
