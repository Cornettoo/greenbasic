async function accordion() {
	document.querySelectorAll('.accordion').forEach((accordion, i) => {
		accordion.querySelectorAll('.accordion__item').forEach((accordion_item, i) => {
			let header = accordion_item.querySelector('.accordion__item__header');
			let body = accordion_item.querySelector('.accordion__item__body');
			let bodyInner = accordion_item.querySelector('.accordion__item__body__inner');
			body.style.maxHeight = bodyInner.offsetHeight + 'px';
			window.addEventListener('resize', function() {
				body.style.maxHeight = bodyInner.offsetHeight + 'px';
			})
			header.addEventListener('click', function() {
				let changeClass = false;
				if (!body.classList.contains('accordion__item__body--active')) {
					changeClass = true;
				}
				accordion.querySelectorAll('.accordion__item__header').forEach((headerAcc, i) => {
					headerAcc.classList.remove('accordion__item__header--active')
				});
				accordion.querySelectorAll('.accordion__item__body').forEach((bodyAcc, i) => {
					bodyAcc.classList.remove('accordion__item__body--active')
				});
				if (changeClass) {
					body.classList.add('accordion__item__body--active')
					header.classList.add('accordion__item__header--active')
				}
			})

		});
	});

}
export {
	accordion
}