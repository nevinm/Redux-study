import React from "react";
import { useModal } from "../customHooks/useModal";
import { Modal } from "./Modal";

export const ModalParent = () => {
  const { isOpen, toggleModal, modalRef } = useModal();
  const {
    isOpen: isOpenSecond,
    toggleModal: toggleModalSecond,
    modalRef: modalRefSecond,
  } = useModal();

  return (
    <>
      {isOpen && (
        <Modal toggleModal={toggleModal} modalRef={modalRef}>
          <h3>Children Modal content</h3>
          <p>More children content</p>
        </Modal>
      )}

      {isOpenSecond && (
        <Modal toggleModal={toggleModalSecond} modalRef={modalRefSecond}>
          <h3>Children Modal content 2.0</h3>
          <p>More children content 2.0</p>
        </Modal>
      )}
      <button onClick={toggleModal}>Open Modal</button>
      <button onClick={toggleModalSecond}>Open 2nd Modal</button>
    </>
  );
};
