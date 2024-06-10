import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.value += action.payload
            })
            .addCase(incrementAsync.pending, () => {
                console.log('increment pendig')
            })

    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount
    }
)

export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions