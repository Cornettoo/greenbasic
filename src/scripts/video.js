import {
	modal
} from './modal'

export function video() {
	let buttons = document.querySelectorAll('[data-modal-video]');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			let id = button.dataset.modalVideo;
			modal(true, false, false, true);
		});
	});
}