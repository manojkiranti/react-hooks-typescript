import {useState, useEffect, memo} from "react";
type ListType = {
    getItems: () => number[]
}
const ListCallback = ({getItems}:ListType) => {
    const [items, setItems] = useState<number[]>([]);
    useEffect(() => {
        setItems(getItems());
        console.log('inside list')
    },[getItems])
    return (
        <>
            {items.map((item,index) => <div key={index}>{item}</div>)}
        </>
    )
}

export default memo(ListCallback);