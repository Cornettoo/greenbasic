const axios = require('../../config/node_modules/axios').default;
import {formatMoneye} from './functions/format_money';

export function cart() {
	let addToCartWrapper = document.getElementById('add-to-cart');
	
	if	(addToCartWrapper) {
		let button = addToCartWrapper.querySelector('button'),
			quantity = addToCartWrapper.querySelector('input'),
			cartTotal = document.getElementById('cart-total'),
			cartPrice = document.getElementById('cart-price'),
			productWidth = document.getElementById('product_width'),
			productLength = document.getElementById('product_length');
	
		button.addEventListener('click', () => {
			let formData = {
				'items': [{
					'id': addToCartWrapper.dataset.variantId,
					'quantity': quantity.value,
					'properties': {
						'width': 600,
						'length': 2000
					}
				}]
			};

			fetch('/cart/add.js', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				})
				.then(response => {
					console.log(response);
					addToCartSuccesful();
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		});


		function addToCartSuccesful() {
			axios.get('/cart.js')
				.then(function (response) {
					// handle success
					console.log(response);
					cartTotal.innerText = response.data.item_count;
					cartPrice.innerText = formatMoneye(response.data.total_price);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
}