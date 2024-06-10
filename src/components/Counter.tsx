import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice"

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return <>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Add 10</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Add 10 slowly</button>
    </>
}