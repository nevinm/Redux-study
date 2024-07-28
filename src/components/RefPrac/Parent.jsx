import { useRef } from "react"
import { Child } from "./Child"

export const Parent = () => {
    const childRef = useRef(null)

    const handleEdit = () => {
        childRef.current.focus()
    }

    return (
        <div className="parent-ref-container">
            <Child ref={childRef} />
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}