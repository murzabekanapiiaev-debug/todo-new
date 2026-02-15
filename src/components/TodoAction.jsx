import { Button } from "./UI/Button";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const TodoAction = ({
  isCompletedTodo,
  onResetTodos,
  onDeleteCompleted,
}) => {
  return (
    <div>
      <StyledButton onClick={onResetTodos}>
        <GrPowerReset />
      </StyledButton>

      <StyledButton
        disabled={isCompletedTodo === 0}
        onClick={onDeleteCompleted}
      >
        <FaDeleteLeft />
      </StyledButton>
    </div>
  );
};


const StyledButton = styled(Button)`
  font-size: 2rem; 
`;

