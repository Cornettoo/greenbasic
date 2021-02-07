const axios = require('../../config/node_modules/axios').default;

export function cart() {
	let cart = document.getElementById('cart');

	if (!cart) return;

	let cartInputs = cart.querySelectorAll('input');

	cartInputs.forEach(input => {

		input.addEventListener('change', () => {
			console.log(input.id);

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

					console.log(finalLinePrice);
					console.log(input.parentElement.parentElement.querySelectorAll('.price'));
					console.log(input.parentElement.parentElement);
				})
				.catch(function (error) {
					console.log('Error : ', error);
				});


		});
	});
}