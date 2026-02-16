import styled from "styled-components"; // styled-components китепканасынан стилдерди импорттоо
import { useState } from "react"; // React'тын абалын (state) башкаруу үчүн

// Эң негизгиси: бул жерде 'export' сөзү болушу шарт,
// болбосо 'TodoApp' аны таба албайт!
export const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState(""); // Инпутка жазылган текстти сактоочу state
  const [error, setError] = useState(""); // Ката билдирүүсүн сактоочу state

  // Форма жөнөтүлгөндө иштөөчү функция
  const handleSubmit = (e) => {
    e.preventDefault(); // Баракчанын жаңыланып кетүүсүн токтотот

    // Текст бош эмес экенин текшерүү
    if (text.trim() === "") {
      setError("Please enter a todo item."); // Текст бош болсо ката көрсөтөт
    } else {
      onAddTodo(text); // TodoApp'ка жаңы тапшырманы жөнөтөт
      setText(""); // Инпутту тазалайт
      setError(""); // Ката билдирүүсүн өчүрөт
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo item"
        value={text} // State'деги маанини инпутка байлайт
        onChange={(e) => setText(e.target.value)} // Ар бир тамга жазылганда state жаңыланат
      />
      <button type="submit">Submit</button>

      {/* Эгер ката бар болсо, ErrorMessage компоненти көрүнөт */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledForm>
  );
};

// --- СТИЛДЕР БӨЛҮМҮ ---

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap; // Ката билдирүүсү астына түшүшү үчүн

  input {
    width: 70%;
    padding: 12px 15px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: teal; // Инпутка басылганда чектеринин түсү өзгөрөт
    }
  }

  button {
    margin-left: 10px;
    padding: 12px 20px;
    font-size: 1.2rem;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #006d6d; // Чычканды алып барганда түсү өзгөрөт
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 0.9rem;
  width: 100%; // Текст толук ээлеп, астынкы сапка түшөт
  text-align: left;
  padding-left: 15%; // Инпуттун башталышына тууралоо
`;
