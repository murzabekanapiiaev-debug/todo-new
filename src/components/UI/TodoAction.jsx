import { Button } from "./Button";
import { FaDeleteLeft } from "react-icons/fa6"; // Иконкалар
import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const TodoAction = ({
  onResetTodos,
  onDeleteCompleted,
  isCompletedTodo,
}) => {
  return (
    <StyledActionContainer>
      <StyledButton onClick={onResetTodos}>
        <GrPowerReset />
      </StyledButton>

      <StyledButtonRight
        onClick={onDeleteCompleted}
        disabled={isCompletedTodo === 0}
      >
        <FaDeleteLeft />
      </StyledButtonRight>
    </StyledActionContainer>
  );
};

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: red;

  &:hover {
    color: #cc0000;
  }
`;
const StyledButtonRight = styled(Button)`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: red;

  &:hover {
    color: #cc0000;
  }
`;
