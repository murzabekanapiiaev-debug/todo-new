import styled from "styled-components";

export const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button onClick={onClick} 
    className={className}
     disabled={disabled}>
      {children}
    </button>
  );
};



export const StyledButton = styled(Button)`
  margin-left: 20px;
  
  height: 50px;
  cursor: pointer;
  background: beige;
  font-size: 1.5rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: rgba(240, 240, 155);
  }
`;
