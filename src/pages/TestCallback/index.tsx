import {useState, useCallback} from "react";
import List from "./ListCallback";

const TestCallback = () => {
    const [number, setNumber] = useState<number>(1);
    const [dark, setDark] = useState<boolean>(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    },[number])
    
    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    }
    const handleDark = () => {
        setDark(prevDark => !prevDark)
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={handleDark}>Toggle Theme</button>
            <List getItems={getItems}/>
        </div>
    )
}

export default TestCallback;