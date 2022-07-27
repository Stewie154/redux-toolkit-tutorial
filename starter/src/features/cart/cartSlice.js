import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
	cartItems: cartItems,
	amount: 4,
	total: 0,
	isLoading: true
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = []
			state.amount = 0
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
		}
	}
})

console.log(cartSlice)

export const { clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer