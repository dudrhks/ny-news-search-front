import React from "react";
import styled from "styled-components";

type ModalProps = {
  onClose: () => void;
};

function Modal({ onClose }: ModalProps) {
  return (
    <Container>
      <div>
        <p>Unbookmark?</p>
        <div className="btn__wrapper">
          <button onClick={onClose}>Delete</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  > div {
    width: 400px;
    height: 100px;
    margin-bottom: 200px;
    padding: 24px;
    background: white;
    overflow-y: scroll;
    > .btn__wrapper {
      display: felx;
      justify-content: flex-end;
      > button {
        background-color: #ce1818;
        color: white;
        padding: 8px 12px;
        cursor: pointer;
      }
    }
  }
`;

export default Modal;
