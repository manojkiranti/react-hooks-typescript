import { FC, memo } from "react"

type todosType = {
    todos: string [];
    addTodo: () => void
}

const Todos:FC<todosType> = ({ todos, addTodo }) => {
    console.log("child todo render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((item,index) => {
                return <p key={index}>{item}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
            
        </>
    )
}

export default memo(Todos);
