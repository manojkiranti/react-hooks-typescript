import { useRef } from "react";
import MyInput from "./MyInput";

const TestForwardRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleInput = () => {
        inputRef.current?.focus()
    }
    return (
        <>
            <MyInput label="Test Label" ref={inputRef} />
            <button className="btn btn-primary" onClick={handleInput}>Check</button>
        </>
    )
}

export default TestForwardRef;