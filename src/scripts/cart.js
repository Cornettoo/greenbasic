const axios = require('../../config/node_modules/axios').default;

import {
	formatMoney
} from './functions/format_money';

export function cart() {
	let cart = document.getElementById('cart'),
		totalPrice = document.getElementById('total-price');

	if (!cart) return;

	let cartItems = cart.querySelectorAll('.cart__item');

	cartItems.forEach(item => {
		let input = item.querySelector('input'),
			priceEl = item.querySelector('.price');

		input.addEventListener('change', () => {
			axios({
					method: 'post',
					url: '/cart/change.js',
					data: {
						id: input.id,
						quantity: input.value
					}
				})
				.then(function (response) {
					let finalLinePrice = response.data.items.find(item => item.id === parseInt(input.id)).final_line_price;
					
					priceEl.innerText = '€ ' + formatMoney(finalLinePrice);
					totalPrice.innerText = '€ ' + formatMoney(response.data.total_price);
				})
				.catch(function (error) {
					// console.log('Error : ', error);
				});
		});

	});

}