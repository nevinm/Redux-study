import React from "react";

export const Modal = ({ children, toggleModal, modalRef }) => {
  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-content">
        <p onClick={toggleModal}>x</p>
        {children}
      </div>
    </div>
  );
};
