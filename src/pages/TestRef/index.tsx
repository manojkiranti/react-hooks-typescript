import {FC, useRef} from "react";
const TestRef:FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = ():void => {
        inputRef.current?.focus()
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

export default TestRef;
