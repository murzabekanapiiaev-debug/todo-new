import styled from "styled-components"; // Стилдерди жазуу үчүн китепкананы чакыруу
import { TodoItem } from "./TodoItem"; // Ар бир тапшырманын жеке компонентин импорттоо

// 'export' сөзү маанилүү, себеби TodoApp муну ушул ат менен импорттоп жатат
export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  return (
    <StyledContainer>
      {/* Array.map() — бул массивди айланып чыгуучу функция. 
        Ал ар бир 'todo' объектиси үчүн бирден 'TodoItem' компонентин түзөт.
      */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // React тизмени тезирээк жаңылашы үчүн уникалдуу 'key' керек
          todo={todo} // Тапшырманын бүтүндөй маалыматын (текст, дата, абалы) жөнөтөбүз
          onToggleTodo={onToggleTodo} // Аткарылды деп белгилөө функциясы
          onDeleteTodo={onDeleteTodo} // Өчүрүү функциясы
          onEditTodo={onEditTodo} // Өзгөртүү функциясы
        />
      ))}
    </StyledContainer>
  );
};

// --- СТИЛДЕР БӨЛҮМҮ ---

// Тизменин сырткы кабыгы (контейнери)
const StyledContainer = styled.div`
  max-width: 600px; // Тизме өтө жайылып кетпеши үчүн туурасын чектөө
  margin: 20px auto; // Экрандын ортосуна коюу
  padding: 10px; // Ички боштуктар
  display: flex; // Элементтерди багыттоо үчүн
  flex-direction: column; // Тапшырмаларды биринин астына бирин тизүү
  gap: 10px; // Тапшырмалардын ортосундагы аралык
`;
