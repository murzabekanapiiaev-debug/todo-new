import styled from "styled-components";
import { TodoItem } from "../TodoItem";


export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
           onDeleteTodo={onDeleteTodo}
           onEditTodo ={onEditTodo}
        />
      ))}
    </>
  );
};


const StyledList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: white;
    padding: 12px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
`;
