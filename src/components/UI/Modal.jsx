import styled from "styled-components";
import { createPortal } from "react-dom";
import { Button } from "./Button";

export const Modal = ({children, onClouse}) => {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <StyledModal>
      <ModalContent>
        {children}
        
          <Button onClick={() => onClouse()} className='btn'>  No</Button>
        

      </ModalContent>
    </StyledModal>,
    modalRoot,
  );
};

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;

  position: fixed;
 
  top: 0;
  left: 0; 
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px 40px;
  border-radius: 15px;

  position: fixed;
  color: #000;
  z-index: 1000;
  transform-translate: (-50%, -50%);

  align-items: center;

  input {
    width: 40%;
    padding: 12px 15px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;