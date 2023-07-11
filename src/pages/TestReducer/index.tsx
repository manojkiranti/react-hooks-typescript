import {FC, useReducer} from "react";
enum ActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    RESET = 'RESET'
}

interface CounterType {
    count: number
}
interface CounterAction {
    type: ActionType.DECREMENT | ActionType.INCREMENT,
    payload: number
}
interface ResetAction {
    type: ActionType.RESET,
}
const initialState = {
    count: 0
}

type MainAction = CounterAction | ResetAction
const reducer = (state:CounterType, action:MainAction) => {
    switch (action.type) {
        case ActionType.INCREMENT: 
            return { count: state.count + action.payload}
        case ActionType.DECREMENT:
            return { count: state.count - action.payload}
        case ActionType.RESET:
            return initialState
        default:
            return state
    }
}

const TestReducer:FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>  <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type:ActionType.INCREMENT, payload: 10})}>Increase 10</button>
            <button onClick={() => dispatch({ type:ActionType.DECREMENT, payload: 10})}>Decrease 10</button>
            <button onClick={() => dispatch({ type:ActionType.RESET})}>Reset</button>
        </>
    )
}

export default TestReducer;