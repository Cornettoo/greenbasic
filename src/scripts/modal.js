export function modal(activate, status, message) {
	let [modal] = document.getElementsByClassName('modal'),
		[modalMessage] = modal.getElementsByClassName('modal__message'),
		modalCloseButtons = modal.querySelectorAll('.close'),
		[modalError] = modal.querySelector('.modal__message__inner').getElementsByTagName('p');

	if (activate) {
		toggleModal('open', status);
	}

	console.log(modalCloseButtons);
	modalCloseButtons.forEach(button => {
		button.addEventListener('click', () => {
			toggleModal('close', status);
		});
	});

	document.body.addEventListener('keydown', function (e) {
		if (e.key == "Escape" && modal.classList.contains('active')) {
			toggleModal('close', status);
		}
	});

	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('modal')) {
			toggleModal('close', status);
		}
	});

	function toggleModal(toggle, status) {
		modalError.innerText = message;

		if (toggle == 'open') {
			document.body.classList.add('modal-open');
			modal.classList.add('active');
			modalMessage.classList.add(status);
		} else {
			document.body.classList.remove('modal-open');
			modal.classList.remove('active');
			modalMessage.classList.remove(status);
		}
	}
}