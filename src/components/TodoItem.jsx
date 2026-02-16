import styled from "styled-components"; // Стилдер үчүн
import { RiTodoLine } from "react-icons/ri"; // Тапшырма иконкасы
import { MdAutoDelete, MdTipsAndUpdates } from "react-icons/md"; // Өчүрүү жана Жаңылоо иконкалары
import { IoBagCheckSharp } from "react-icons/io5"; // Аткарылды (Check) иконкасы
import { useState } from "react"; // Абалды башкаруу үчүн
import { Modal } from "./UI/Modal"; // Модалдык терезе компоненти
import { Button } from "./UI/Button"; // Даяр баскыч компоненти
import { MdEdit } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

// 'export' — TodoList бул компонентти таба алышы үчүн керек
export const TodoItem = ({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  // todo объектисинен маалыматтарды ажыратып алуу (Destructuring)
  const { id, value, date, isCompleted } = todo;

  // Модалдык терезелердин ачык же жабык экенин көзөмөлдөөчү state'тер
  const [DeleteIsWisable, setDeleteIsWisable] = useState(false); // Өчүрүү модалы
  const [isWisableEdit, setIsWisableEdit] = useState(false); // Өзгөртүү модалы
  const [chengeText, setChengeText] = useState(value); // Өзгөртүлө турган жаңы текст

  return (
    // Эгер тапшырма аткарылса (isCompleted: true), анда 'completedTodo' классы кошулат
    <StyledTodoItem className={isCompleted ? "completedTodo" : ""}>
      <StyledTodoIcon className="todoIcon" /> {/* Сол жактагы иконка */}
      <StyledTodoText>{value}</StyledTodoText> {/* Тапшырманын тексти */}
      <StyledTodoDate>{date}</StyledTodoDate> {/* Түзүлгөн күнү */}
      {/* Өчүрүү баскычы (иконка) */}
      <StyledDeleteIcon
        className="deleteIcon"
        onClick={() => setDeleteIsWisable(true)}
      />
      {/* Өчүрүүнү ырастоочу модалдык терезе */}
      {DeleteIsWisable && (
        <Modal onClouse={() => setDeleteIsWisable(false)}>
          <h2>Are you sure?</h2>
          <Button onClick={() => onDeleteTodo(id)}>Yes</Button>
        </Modal>
      )}
      {/* Өзгөртүү баскычы (иконка) */}
      <StyledEditIcon
        className="editIcon"
        onClick={() => setIsWisableEdit(true)}
      />
      {/**/}
      {/* Өзгөртүү киргизүүчү модалдык терезе */}
      {isWisableEdit && (
        <Modal onClouse={() => setIsWisableEdit(false)}>
          <h2>Enter you update todo...</h2>
          <input
            type="text"
            value={chengeText}
            onChange={(e) => setChengeText(e.target.value)}
          />
          <Button
            onClick={() => {
              onEditTodo(id, chengeText); // Жаңы текстти сактоо
              setIsWisableEdit(false); // Модалды жабуу
            }}
          >
            Edit
          </Button>
        </Modal>
      )}
      {/* Аткарылды деп белгилөө баскычы (иконка) */}
      <StyledCheckIcon className="checkIcon" onClick={() => onToggleTodo(id)} />
    </StyledTodoItem>
  );
};

// --- СТИЛДЕР БӨЛҮМҮ (Styled Components) ---

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: #112d49;
  background-color: #fbfef9;

  // Аткарылган тапшырмалар үчүн өзгөчө стиль
  &.completedTodo {
    background-color: transparent; // Фонду өчүрүү
    border-color: gray; // Рамканы боз кылуу
    color: gray; // Текстти боз кылуу
    text-decoration: line-through; // Тексттин ортосун чийүү (кошумча сунуш)
  }
`;

const StyledTodoText = styled.p`
  width: 100%;
  text-align: left;
`;

const StyledTodoDate = styled.p`
  font-size: 15px;
  color: gray;
`;

// Иконкаларды стилдөө
const StyledTodoIcon = styled(RiTodoLine)`
  font-size: 30px;
  margin-right: 10px;
  color: teal;
`;

const StyledDeleteIcon = styled(MdAutoDelete)`
  cursor: pointer;
  padding: 0 7px;
  font-size: 45px;
  &:hover {
    color: red;
  } // Чычканды алып барганда кызарат
`;

const StyledEditIcon = styled(MdEdit)`
  cursor: pointer;
  padding: 0 7px;
  font-size: 45px;
  &:hover {
    color: blue;
  } // Чычканды алып барганда көгөрөт
`;

const StyledCheckIcon = styled(FaCheckSquare)`
  cursor: pointer;
  padding: 0 7px;
  font-size: 45px;
  &:hover {
    color: green;
  } // Чычканды алып барганда жашыл болот
`;
