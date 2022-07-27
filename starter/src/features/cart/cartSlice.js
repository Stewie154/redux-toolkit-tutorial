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
		},
		increase: (state, action) => {
			let cartItem = state.cartItems.find(item => item.id === action.payload)
			cartItem.amount += 1
		},
		decrease: (state, action) => {
			let cartItem = state.cartItems.find(item => item.id === action.payload)
			if (cartItem.amount > 0) cartItem.amount -= 1
		},
		changeAmount: (state, {payload}) => {
			let cartItem = state.cartItems.find(item => item.id === payload.id)
			cartItem.amount = payload.computation === 'increase' ? cartItem.amount + 1 : cartItem.amount -1
		}
	}
})

console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, changeAmount } = cartSlice.actions

export default cartSlice.reducer