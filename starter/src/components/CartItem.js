import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, increase, decrease, changeAmount } from '../features/cart/cartSlice'

const CartItem = ({ id, img, title, price, amount }) => {

	const dispatch = useDispatch()

	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">{price}</h4>
				<button className="remove-btn" onClick={() => dispatch(removeItem(id))}>remove</button>
			</div>
			<div>
				<button className="amount-btn" onClick={() => dispatch(changeAmount({ id: id, computation: 'increase'}))}>
					<ChevronUp />
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn" onClick={() => dispatch(changeAmount({ id: id, computation: 'decrease'}))}>
					<ChevronDown />
				</button>
			</div>
		</article>
	)
}

export default CartItem