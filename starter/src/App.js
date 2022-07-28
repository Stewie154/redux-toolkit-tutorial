import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice';

import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
	const { isOpen } = useSelector(store => store.modal)

	const { cartItems } = useSelector((store) => store.cart)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
