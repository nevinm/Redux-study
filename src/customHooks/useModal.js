import { useRef, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const modalRef = useRef(null)
    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return {
        isOpen, openModal, closeModal, modalRef
    }
}