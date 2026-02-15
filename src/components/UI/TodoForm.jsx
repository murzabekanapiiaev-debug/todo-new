import styled from "styled-components";
import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setError("Please enter a todo item.");
    } else {
      onAddTodo(text);
      setText("");
      setError("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    width: 70%;
    padding: 12px 15px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  button {
    margin-left: 10px;
    padding: 12px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 0.9rem;
  width: 100%;
  text-align: left;
`;
