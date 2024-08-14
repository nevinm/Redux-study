import { useState, useRef, useEffect } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    toggleModal,
    modalRef,
  };
};
