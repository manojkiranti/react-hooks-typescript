import { FC, useState } from "react";
import { updatedCounter } from "./withCounter";

type hoverProps = {
    name: string;
}
const HoverIncrease:FC = () => {
    const [fontSize, setFontSize] = useState<number>(0);
    return (
        <div>
            {/*When clicked, increment the value of fontSize*/}
            
            <button onMouseOver={() => setFontSize((size) => size + 1)}>
                Hover the mouse
            </button>
            {/*Set the font size of this text to the fontSize variable.*/}
            {/*Furthermore, display its value as well.*/}
            <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
        </div>
    )
}
export default updatedCounter(HoverIncrease);