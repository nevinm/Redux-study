import React, { useState } from 'react';
import { useModal } from '../customHooks/useModal';

export const Modal = ({ handleSaveModal, isOpen }) => {
    const [todo, setTodo] = useState("");
    const { closeModal, modalRef } = useModal();

    const handleChangeModalInput = (e) => {
        setTodo(e.target.value)
    }

    const handleSave = () => {
        closeModal()
        handleSaveModal({
            title: todo,
            done: false,
            isEditing: false,
            id: Date.now()
        });
    }

    return (
        <div className={`modal-container ${isOpen ? 'visible' : ""}`} ref={modalRef}>
            <h3>Modal content</h3>
            <input type='text' value={todo} onChange={(e) => handleChangeModalInput(e)} />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};
