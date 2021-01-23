export function nav() {
	let hamburgers = document.querySelectorAll('.nav__hamburger');

	hamburgers.forEach(button => {
		button.addEventListener('click', () => {
			document.body.classList.toggle('menu-is-open');
		});
	});
}