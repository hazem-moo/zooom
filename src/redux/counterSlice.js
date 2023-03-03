import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    reducers: {
        increase: state => {
            state.value += 1
        }
    }
})

export const { increase } = counterSlice.actions
export default counterSlice.reducer