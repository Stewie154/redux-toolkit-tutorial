import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
	cartItems: cartItems,
	amount: 4,
	total: 0,
	isLoading: true
}

const url = 'https://course-api.com/react-useReducer-cart-project'

export const fetchItems = createAsyncThunk('cart/fetchCartItems', () => {
	return fetch(url)
			.then(res => res.json())
			.catch(err => console.log(err))
})

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
			cartItem.amount -= 1
		},
		calculateTotals: (state) => {
			let amount = 0
			let total = 0
			state.cartItems.forEach(item => {
				amount += item.amount
				total += item.amount * item.price
			})
			state.amount = amount
			state.total = total
		}
	},
	extraReducers: {
		[fetchItems.pending]: (state) => {
			state.isLoading = true 
		},
		[fetchItems.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.cartItems = action.payload
		},
		[fetchItems.rejected]: (state) => {
			state.isLoading = false;
		}
	}
})

console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer