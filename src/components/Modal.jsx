import React, { useState } from "react";

export const Modal = ({ children, toggleModal }) => {
  return (
    <div>
      <p onClick={toggleModal}>x</p>
      {children}
    </div>
  );
};
