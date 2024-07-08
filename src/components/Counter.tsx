import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState, store } from "../store/store"
import { decrement, increment, incrementAsync, incrementByValue } from "../store/counter/counterSlice"

export const Counter = () => {
    const count = useSelector((store: RootState) => store.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByValue(10))}>+10</button>
            <button onClick={() => dispatch(incrementAsync(20))}>async +10</button>
        </div>
    )
}