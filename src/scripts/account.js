async function account() {
	let editAddressBtn = document.querySelectorAll('[data-edit-address]'),
		deleteAddressForm = document.querySelectorAll('.address-delete-form'),
		addAddressBtn = document.querySelector('[data-add-address]'),
		addAddressWrapper = document.querySelector('[data-add-address-wrapper]');

	if (editAddressBtn) {
		editAddressBtn.forEach(button => {
			let formId = button.dataset.editAddress,
				form = document.querySelector('#address_form_' + formId + '');

			button.addEventListener('click', () => {
				form.classList.add('active');
			});
		});
	}

	if (addAddressBtn) {
		addAddressBtn.addEventListener('click', () => {
			addAddressWrapper.classList.toggle('active');
		});
	}

	if (deleteAddressForm) {
		deleteAddressForm.forEach(form => {
			form.addEventListener('submit', (event) => {
				if (!window.confirm('Weet je zeker dat je dit adres wilt verwijderen?')) {
					event.preventDefault();
				}
			});
		});
	}


	let fieldsSelect = document.querySelectorAll('.form__field__select');
	if (fieldsSelect) {
		fieldsSelect.forEach(field => {
			let select = field.querySelector('select'),
				input = field.querySelector('input');

			select.addEventListener('change', (event) => {
				input.value = select.options[select.selectedIndex].text;
			});
		});
	}

}
export {
	account
}