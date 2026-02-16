import { useContext, useState } from "react"; // React'тын ички куралдары
import styled from "styled-components"; // Стилдер үчүн
import { TodoForm } from "./TodoForm"; // Жаңы тапшырма кошуу формасы
import { TodoList } from "./TodoList"; // Тапшырмалардын тизмеси
import { TodoAction } from "./UI/TodoAction"; // Башкаруу баскычтары (Reset ж.б.)
import { ThemeContext } from "../context/ThemeProvider"; // Тема контексти
import { LanguageContext } from "../context/LanguageProvider"; // Тил контексти
import { MdLanguage } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";

// Тилдерге жараша тексттердин объектиси
const lang = {
  EN: { title: "Todo App", noTodos: "No todos!" },
  RU: { title: "Список дел", noTodos: "Пусто!" },
};

export const TodoApp = () => {
  // Тизмени сактоочу негизги массив (State)
  const [todos, setTodos] = useState([]);

  // Контексттен теманы жана тилди, ошондой эле аларды алмаштыруучу функцияларды алабыз
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Жаңы тапшырма кошуу функциясы
  const handleAddTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(), // Уникалдуу ID түзүү
        value: text,
        date: new Date().toLocaleDateString(), // Түзүлгөн күнү
        isCompleted: false, // Жаңы тапшырма бүтө элек деп эсептелет
      },
    ]);
  };

  // Тапшырманы өчүрүү (ID боюнча фильтрлөө)
  const handleDeleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  // Тапшырманы аткарылды деп белгилөө же кайра артка кайтаруу
  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  // Тапшырманын текстин өзгөртүү (Edit)
  const handleEditTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, value: newText } : todo)),
    );
  };

  // Тизмени толугу менен тазалоо
  const handleResetTodos = () => setTodos([]);

  // Аткарылып бүткөн тапшырмаларды гана өчүрүү
  const handleDeleteCompletedTodo = () =>
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));

  // Аткарылган тапшырмалардын санын эсептөө (TodoAction'го берүү үчүн)
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    // Темага жараша стилди өзгөртүүчү негизги контейнер
    <StyledTodoApp theme={theme}>
      {/* Тандалган тилге жараша баш сөз */}
      <h1>{lang[language].title}</h1>

      {/* Тапшырма кошуу формасы */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* Теманы жана Тилди алмаштыруу баскычтары */}
      <div className="controls">
        <button onClick={toggleTheme}>
          <VscColorMode />
        </button>
        <button onClick={toggleLanguage}>
          {" "}
          <MdLanguage /> ({language})
        </button>
      </div>

      {/* Эгер тизме бош эмес болсо, Reset жана Delete Completed баскычтарын көрсөтүү */}
      {!!todos.length && (
        <TodoAction
          onResetTodos={handleResetTodos}
          onDeleteCompleted={handleDeleteCompletedTodo}
          isCompletedTodo={completedTodosCount}
        />
      )}

      {/* Тизмеде маалымат болсо TodoList'ти, жок болсо "Пусто" деген жазууну чыгаруу */}
      {todos.length ? (
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
        />
      ) : (
        <h2 className="empty-msg">{lang[language].noTodos}</h2>
      )}
    </StyledTodoApp>
  );
};

// --- СТИЛДЕР БӨЛҮМҮ ---

const StyledTodoApp = styled.div`
  // ThemeProvider'ден келген темага жараша фонду өзгөртүү
  background-color: ${(props) =>
    props.theme === "dark" ? "#1a1a1a" : "#f4f4f4"};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  min-height: 100vh;
  padding: 40px;
  text-align: center;
  transition: 0.3s; // Түстөр жумшак алмашуусу үчүн

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  .controls {
    margin: 20px 0;

    button {
      background: beige;
      border: none;
      padding: 10px 20px;
      margin: 0 10px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background: #e6e6ad;
      }
    }
  }

  .empty-msg {
    margin-top: 50px;
    opacity: 0.5;
  }
`;
