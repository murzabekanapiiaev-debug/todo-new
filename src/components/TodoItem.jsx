import styled from "styled-components";
import { RiTodoLine } from "react-icons/ri";
import { MdAutoDelete, MdTipsAndUpdates } from "react-icons/md";
import { IoBagCheckSharp } from "react-icons/io5";
import { useState } from "react";
import { Modal } from "./UI/Modal";
import { Button } from "./UI/Button";

export const TodoItem = ({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  const { id, value, date, isCompleted } = todo;

  const [DeleteIsWisable, setDeleteIsWisable ] =  useState(false);
  const [isWisableEdit, setIsWisableEdit] = useState(false)

  const hanldeDeleteIsWisableModal = () => setDeleteIsWisable((prev) => !prev);
  const handleIsEditWisableModal = () => setIsWisableEdit((prev) => !prev);

  const [chengeText, setChengeText] = useState(value);
  

  const handleChengeText = (e) => setChengeText(e.target.value)

  const handleEdit = (id, chengeText) => {
    onEditTodo(id, chengeText)

    handleIsEditWisableModal();

  }
  

  return (
    <StyledTodoItem className={isCompleted ? "completedTodo" : ""}>
      <StyledTodoIcon className="todoIcon" />
      <StyledTodoText>{value}</StyledTodoText>
      <StyledTodoDate>{date}</StyledTodoDate>
      <StyledDeleteIcon
        className="deleteIcon"
        onClick={hanldeDeleteIsWisableModal}
      />

      {DeleteIsWisable && (
        <Modal onClouse={hanldeDeleteIsWisableModal}>
          <h2>Are you sure?</h2>
          <Button onClick={() => onDeleteTodo(id)}>Yes</Button>
        </Modal>
      )}
      <StyledEditIcon className="editIcon" onClick={handleIsEditWisableModal} />

      {isWisableEdit && (
        <Modal onClouse={handleIsEditWisableModal}>
          <h2>Enter you update todo...</h2>

          <input type="text" value={chengeText} onChange={handleChengeText} />

          <Button onClick={() => handleEdit(id, chengeText)}>; Edit</Button>
        </Modal>
      )}
      <StyledCheckIcon className="checkIcon" onClick={() => onToggleTodo(id)} />
    </StyledTodoItem>
  );
};


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

  &.completedTodo {
    background-color: unset;
    border-color: gray;
    color: gray;
  }

  &.completedTodo .todoIcon,
  &.completedTodo .checkIcon,
  &.completedTodo .deleteIcon {
    color: gray;
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
  }
`;

const StyledEditIcon = styled(MdTipsAndUpdates)`
  cursor: pointer;
  padding: 0 7px;
  font-size: 45px;

  &:hover {
    color: blue;
  }
`;

const StyledCheckIcon = styled(IoBagCheckSharp)`
  cursor: pointer;
  padding: 0 7px;
  font-size: 45px;

  &:hover {
    color: green;
  }
`;
