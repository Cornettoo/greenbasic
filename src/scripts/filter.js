const axios = require('../../config/node_modules/axios').default;

export function filter() {
	let toggleButtons = document.querySelectorAll('.toggle-filter'),
		[filter] = document.getElementsByClassName('filter'),
		inputs = filter.querySelectorAll('input');

	toggleButtons.forEach(button => {
		button.addEventListener('click', () => {
			filter.classList.toggle('active');
		});
	});	

	inputs.forEach(input => {
		input.addEventListener('change', () => {
			console.log('click henk yesswefwef nee welll');
axios({
	type: 'post',
	url: '/product?view=filter'
})
.then(function (response) {
	console.log('Response ', response);
})
.catch(function (error) {
	console.log('Error ', error);
});
		});
	});
}