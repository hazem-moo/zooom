import { createSlice } from "@reduxjs/toolkit";

export const basketSllice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addToBasket: ( state, action ) => {
            state.items = [...state.items, action.payload]
        }
    }
})

export const { addToBasket } = basketSllice.actions

export const selectItemWithId = (state, id) =>
state.basket.items.filter(item => item.id === id )

export default basketSllice.reducer