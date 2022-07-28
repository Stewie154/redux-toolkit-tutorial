import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
	cartItems: [],
	amount: 4,
	total: 0,
	isLoading: true
}

const url = 'https://course-api.com/react-useReducer-cart-project'

export const fetchItems = createAsyncThunk(
	'cart/fetchCartItems', 
	async (unused_param, thunkApi) => {
		try {
			//unused_param and thunkApi aren't being used here, console log them in try to see what they do
			const response = await axios(url)
			return response.data
		} catch (error) {
			
		}
	}
)

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
			console.log(action)
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