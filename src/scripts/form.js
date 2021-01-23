export function form() {
	let forms = document.querySelectorAll('.form--contact');

	forms.forEach(form => {
		console.log(form);

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			onClick(form);
		});
	});

	function onClick(form) {
		grecaptcha.ready(function () {
			grecaptcha.execute('6LcpgSoaAAAAANgxrxQLkVCUXOyFVdey50Z9KExl', {
				action: 'submit'
			}).then(function (token) {
				console.log(form);
				form.submit();
			});
		});
	}

}