import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'


const Modal = () => {
	const dispatch = useDispatch()

	const handleConfirmClick = () => {
		dispatch(clearCart())
		dispatch(toggleModal())
	}

	return (
		<>
			<aside className="modal-container">
				<div className="modal">
					<h4>remove all items from your shopping cart?</h4>
					<div className="btn-container">
						<button type="button" className="btn confirm-btn" onClick={() => handleConfirmClick()}>confirm</button>
						<button type="button" className="btn clear-btn" onClick={() => dispatch(toggleModal())}>cancel</button>
					</div>
				</div>
			</aside>
		</>
	)
}

export default Modal