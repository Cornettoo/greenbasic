export function filter() {
	let toggleButtons = document.querySelectorAll('.toggle-filter'),
		[filter] = document.getElementsByClassName('filter');

	toggleButtons.forEach(button => {
		button.addEventListener('click', () => {
			filter.classList.toggle('active');
		});
	});	
}