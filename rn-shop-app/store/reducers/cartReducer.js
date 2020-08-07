import {ADD_TO_CART} from '../actions/cartActions';
import CartItem from '../../models/CartItem';

const initialState = {
	items: {},
	totalAmount: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const addedProduct = action.product;
			const productPrice = addedProduct.price;
			const productTitle = addedProduct.title;
			let cartItem;

			if (state.items[addedProduct.id]) {
				cartItem = new CartItem(
					state.items[addedProduct.id].quantity + 1, 
					productPrice,
					productTitle,
					state.items[addedProduct.id].sum + productPrice
				);
			} else {
				cartItem = new CartItem(1, productPrice, productTitle, productPrice);
			}
			return {
				...state, // This isn't strictly necessary but if we add something new to the state slice we might loose data if we forget to do this 169
				items: {...state.items, [addedProduct.id]: cartItem},
				totalAmount: state.totalAmount + productPrice
			}
		default:
			return state;
		}
};