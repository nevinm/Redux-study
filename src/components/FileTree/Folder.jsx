import { useState } from "react"

export const Folder = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { name, type, children } = item


    const handleOpen = () => {
        setIsOpen(true)
    }

    if (type === 'folder') {
        return (
            <div style={{ marginLeft: "20px", borderLeft: "1px solid white" }} className="folder-container" onClick={handleOpen}>
                {isOpen ? '📂' : '📁'}
                {isOpen && children.map((child, index) => <Folder key={`folder-${index}`} item={child} />)}
            </div>
        )
    } else {
        return (
            <div style={{ marginLeft: "20px", borderLeft: "1px solid white" }} className="file-container">
                {'📄' && <p>{name}</p>}
            </div>
        )
    }
}