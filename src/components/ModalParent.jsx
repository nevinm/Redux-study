import { useModal } from "../customHooks/useModal";
import { Modal } from "./Modal";

export const ModalParent = () => {
  const { isOpen, toggleModal } = useModal();
  const { isOpen: isOpenSecond, toggleModal: toggleModalSecond } = useModal();

  return (
    <>
      {isOpen && (
        <Modal toggleModal={toggleModal}>
          <h3>Children Modal content</h3>
          <p>More children content</p>
        </Modal>
      )}

      {isOpenSecond && (
        <Modal toggleModal={toggleModalSecond}>
          <h3>Children Modal content 2.0</h3>
          <p>More children content 2.0</p>
        </Modal>
      )}
      <button onClick={toggleModal}>Open Modal</button>
      <button onClick={toggleModalSecond}>Open 2nd Modal</button>
    </>
  );
};
