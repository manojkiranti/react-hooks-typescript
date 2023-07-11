import {  useLayoutEffect, useRef, useState } from "react";

const LayoutEffect = () => {
    const [isTarget, setIsTarget] = useState(false);
    const [rect, setRect] = useState({top:0,left:0})
    const buttonRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
       if(buttonRef) {
        const getRect = buttonRef.current!.getBoundingClientRect();

        setRect({
            top: getRect.top + getRect.height,
            left: getRect.left
        })
       }
       
        console.log('layout')
    },[isTarget])
   
    return (
        <>
        <h2>UseLayoutEffect Example</h2>
        <button ref={buttonRef} className="btn btn-secondary" onPointerEnter={() => setIsTarget(true)} onPointerLeave={() => setIsTarget(false)}>
            Hover Me
        </button>
        {isTarget && <div 
            style={{
                top: rect.top + 5,
                left: rect.left,
                position: 'fixed'
            }}
            >Tool Tip</div>}
        </>
    )
}

export default LayoutEffect;