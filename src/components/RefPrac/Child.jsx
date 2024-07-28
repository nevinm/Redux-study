import { forwardRef } from "react"

export const Child = forwardRef((props, childRef) => {
    return (
        <>
            <input ref={childRef} {...props} />
        </>
    )
})