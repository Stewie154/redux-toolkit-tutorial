import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, fetchItems } from './features/cart/cartSlice';

import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
	const { isOpen } = useSelector(store => store.modal)

	const { cartItems, isLoading } = useSelector((store) => store.cart)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchItems('this is something that could be passed in to the async function call'))
	}, [])

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems, dispatch])

	const renderContent = () => {
		return isLoading ? <h1>Loading...</h1> : <CartContainer />
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			{renderContent()}
		</main>
	);
}
export default App;
