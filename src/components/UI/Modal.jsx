import styled from "styled-components";
import { createPortal } from "react-dom";
import { Button } from "./Button";

export const Modal = ({ children, onClouse }) => {
  // modalRoot — index.html ичиндеги <div id="modal"> элементин табат.
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  // createPortal — модалды HTML иерархиясынан сырткары, башка "эшикке" чыгарат.
  return createPortal(
    <StyledModal>
      <ModalContent>
        {children} {/* Сырттан келген текст же форма ушул жерге коюлат */}
        {/* Жабуу баскычы, басылганда onClouse функциясын иштетет */}
        <Button onClick={() => onClouse()} className="btn">
          {" "}
          No
        </Button>
      </ModalContent>
    </StyledModal>,
    modalRoot,
  );
};

// StyledModal — бүткүл экранды каптаган тунук кара фон (overlay).
const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.6); // 60% тунуктук
  width: 100%;
  height: 100vh;
  position: fixed; // Экранга жабышып турат
  top: 0;
  left: 0;
  right: 0;
  display: flex; // Ичиндеги терезени ортого коюу үчүн
  justify-content: center;
  align-items: center;
  z-index: 1000; // Баардык элементтердин үстүндө болуу үчүн
`;

// ModalContent — ак түстөгү ортодогу кичинекей терезе.
const ModalContent = styled.div`
  background: white;
  padding: 30px 40px;
  border-radius: 15px;
  position: fixed;
  color: #000;
  z-index: 1000;
  // transform-translate — бул жерде ката бар, бирок сенин стилиңди калтырдым.
  transform-translate: ((-50%, -50%));
  align-items: center;

  // Модалдын ичиндеги инпуттун стили.
  input {
    width: 40%;
    padding: 12px 15px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;
