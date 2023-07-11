import ListGeneric from "../../components/generics/List";


const TestGenerics = () => {
    const handleOnClick = (value: string|number) => {
        console.log(value)
    }
    return (
        <>
            <ListGeneric items={[1,2]} onClick={handleOnClick} />
        </>
    )
}

export default TestGenerics;