type ListProps<T> = {
    items: T [];
    onClick: (value:T) => void;
}
const ListGeneric = <T extends string | number>({items,onClick}:ListProps<T>) => {
    return (
        <>
            <div>
                <h1>List of Items</h1>
                {items.map((item,index) => {
                    return(
                        <p key={index} onClick={() => onClick(item)}>{item}</p>
                    )
                })}
            </div>
        </>
    )
}

export default ListGeneric;