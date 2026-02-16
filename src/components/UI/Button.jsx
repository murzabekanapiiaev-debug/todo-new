import styled from "styled-components";

// Базалык Button компоненти.
// children — баскычтын ичиндеги текст же иконка.
// onClick — басылгандагы функция. className — StyledButton'дон келген стилдерди кабыл алуу үчүн.
export const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

// StyledButton — жогорудагы Button'ду ороп, ага CSS стилдерин берет.
export const StyledButton = styled(Button)`
  margin-left: 20px;
  height: 50px;
  cursor: pointer;
  background: beige; // Баскычтын түсү
  font-size: 1.5rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;

  // hover — чычканды үстүнө алып баргандагы эффект.
  &:hover {
    background-color: rgba(240, 240, 155);
  }
`;
