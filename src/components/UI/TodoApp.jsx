import { useContext, useState } from "react";
import styled from "styled-components";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoAction } from "../TodoAction";
import { MdLightMode } from "react-icons/md";
import { Button } from "./Button";
import { ThemeContext } from "../../context/ThemeProvider";
import { darkTheme, lightTheme } from "../../styles/theme";
import { LanguageContext } from "../../context/LanguageProvider";
import { MdOutlineLanguage } from "react-icons/md";

const lang = {
  EN: {
    title: "Todo App",
    noTodos: "No todos!",
  },
  RU: {
    title: "Список дел",
    noTodos: "Пусто!",
  },
};

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleAddTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        value: text,
        date: new Date().toLocaleDateString(),
        isCompleted: false,
      },
    ]);
  };

  const handleDeleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
              date: new Date().toLocaleString(),
            }
          : todo,
      ),
    );
  };

  const handleDeleteCompletedTodo = () =>
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));

  const handleResetTodos = () => setTodos([]);

  const handleChangeTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, value: text, date: new Date().toLocaleString() }
          : todo,
      ),
    );
  };

  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <StyledTodoApp theme={theme}>
      <h1>{lang[language].title}</h1>

      <TodoForm onAddTodo={handleAddTodo} />

      <Button onClick={toggleTheme}>
        <MdLightMode />
      </Button>
      <Button onClick={toggleLanguage}>
        <MdOutlineLanguage />
      </Button>

      {!!todos.length && (
        <TodoAction
          isCompletedTodo={completedCount}
          onResetTodos={handleResetTodos}
          onDeleteCompleted={handleDeleteCompletedTodo}
        />
      )}

      {todos.length ? (
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleChangeTodo}
        />
      ) : (
        <h2>{lang[language].noTodos}</h2>
      )}

      {completedCount > 0 && (
        <h2>
          Completed: {completedCount} {completedCount > 1 ? "todos" : "todo"}
        </h2>
      )}
    </StyledTodoApp>
  );
};

const StyledTodoApp = styled.div`
  ${({ theme }) => (theme === "dark" ? darkTheme : lightTheme)}

  max-width: 600px;
  margin: 50px auto;
  padding: 20px 30px;
  text-align: center;

  border-radius: 2rem;

  h1 {
    font-size: 2.2rem;
    margin: 25px 0 48px 0;
  }
`;
