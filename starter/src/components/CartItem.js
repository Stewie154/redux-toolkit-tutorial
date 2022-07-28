import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'

const CartItem = ({ id, img, title, price, amount }) => {

	const dispatch = useDispatch()

	const handleRemoveItem = (id) => {
		dispatch(removeItem(id))
	}

	const handleIncrease = (id) => {
		dispatch(increase(id))
	}

	const handleDecrease = (id, amount) => {
		if (amount === 1) {
			dispatch(removeItem(id))
			return
		}
		dispatch(decrease(id))
	}

	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">{price}</h4>
				<button className="remove-btn" onClick={() => handleRemoveItem(id)}>remove</button>
			</div>
			<div>
				<button className="amount-btn" onClick={() => handleIncrease(id)}>
					<ChevronUp />
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn" onClick={() => handleDecrease(id, amount)}>
					<ChevronDown />
				</button>
			</div>
		</article>
	)
}

export default CartItem