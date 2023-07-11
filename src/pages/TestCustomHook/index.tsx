import useFetch from "../../hooks/useFetch";
export type TodoType = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}
const TestCustomHook = () => {
    const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <>
        {loading ? <div>Loading...</div> :<ul 
            style={{
                margin: 0,
                padding: 0,
                listStyleType: 'none'
            }}
            >
            {data && data.map((item:TodoType) => {
                return (
                    <li key={item.id}>{item.title}</li>
                )
            })}
        </ul>}
        </>
    )
}

export default TestCustomHook;