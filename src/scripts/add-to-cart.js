const axios = require('../../config/node_modules/axios').default;

import {
	formatMoney
} from './functions/format_money';

import {
	modal
} from './modal'

export function addToCart() {
	let addToCartWrapper = document.getElementById('add-to-cart');

	if (addToCartWrapper) {
		let button = addToCartWrapper.querySelector('button'),
			quantity = addToCartWrapper.querySelector('input'),
			inventory = addToCartWrapper.dataset.inventory,
			variantId = parseInt(addToCartWrapper.dataset.variantId),
			cartTotal = document.getElementById('cart-total'),
			cartPrice = document.getElementById('cart-price'),
			productWidth = document.getElementById('product_width'),
			productLength = document.getElementById('product_length'),
			succesText = 'Het product is toegevoegd aan je winkelwagen';

		button.addEventListener('click', () => {
			axios({
					method: 'post',
					url: '/cart/add.js',
					data: {
						items: [{
							'id': variantId,
							'quantity': quantity.value,
							'properties': {
								'Breedte': 600,
								'Lengte': 2000
							}
						}]
					}
				})
				.then(function (response) {
					modal(true, 'succes', succesText);
					addToCartSuccesful();
				})
				.catch(function (error) {
					addToCartError();
				});
		});

		function addToCartError() {
			axios.get('/cart.js')
				.then(function (response) {
					let quantityInCart = 0;

					if (response.data.items.find(item => item.id === variantId)) {
						quantityInCart = response.data.items.find(item => item.id === variantId).quantity
					}

					if (quantityInCart >= inventory) {
						let errorAllInCartText = `Alle ${inventory} producten zijn al toegevoegd aan de winkelwagen`;
						modal(true, 'error', errorAllInCartText);
					} else {
						let numberOfProducts = inventory - quantityInCart;
						let errorMaxLimitText = `Je kunt maximaal ${numberOfProducts} producten toevoegen`;
						modal(true, 'error', errorMaxLimitText);
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		}

		function addToCartSuccesful() {
			axios.get('/cart.js')
				.then(function (response) {
					cartTotal.innerText = response.data.item_count;
					cartPrice.innerText = formatMoney(response.data.total_price);
				})
				.catch(function (error) {
					console.log('cart-error: ' + error);
				});
		}
	}
}