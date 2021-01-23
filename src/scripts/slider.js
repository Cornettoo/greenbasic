import {
	Swiper,
	Navigation,
	Pagination,
	Controller,
	Thumbs,
	HashNavigation
} from '../../config/node_modules/swiper/swiper.esm.js';
Swiper.use([Navigation, Pagination, Controller, Thumbs, HashNavigation]);

export function slider() {

	// Slider blocks
	let sliderBlocks = document.querySelectorAll('.slider--blocks');

	sliderBlocks.forEach(slider => {
		let prevButton = slider.getElementsByClassName('slider__buttons__item--prev')[0],
			nextButton = slider.getElementsByClassName('slider__buttons__item--next')[0];

		new Swiper(slider, {
			slidesPerView: 'auto',
			loop: true,

			navigation: {
				nextEl: nextButton,
				prevEl: prevButton
			}
		});
	});


	// Slider on product page
	let sliderThumbs = document.querySelector('.slider-thumbs'),
		sliderTop = document.querySelector('.slider-top');

	let galleryThumbs = new Swiper(sliderThumbs, {
		slidesPerView: 'auto',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		threshold: 10
	});

	new Swiper(sliderTop, {
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});


	// Slider list
	let slidersList = document.querySelectorAll('.slider-list');
	slidersList.forEach(slider => {
		let listItems = slider.querySelectorAll('li'),
			listItemsLength = listItems.length - 1,
			activeListItem = listItems[0],
			activeIndex = 0,
			nextActiveIndex = 1;

		setInterval(function () {
			activeListItem.classList.remove('active');
			listItems[nextActiveIndex].classList.add('active');

			activeIndex = nextActiveIndex;
			activeListItem = listItems[activeIndex];

			nextActiveIndex = nextActiveIndex == listItemsLength ? 0 : nextActiveIndex + 1;
		}, 4000);
	});


	// Slider featured collection
	let sliderFeaturedColl = document.querySelectorAll('.featured-cat__blocks');

	sliderFeaturedColl.forEach(slider => {
		let prevButton = slider.getElementsByClassName('slider__buttons__item--prev')[0],
			nextButton = slider.getElementsByClassName('slider__buttons__item--next')[0];

		new Swiper(slider, {
			slidesPerView: 'auto',
			loop: true,

			// navigation: {
			// 	nextEl: nextButton,
			// 	prevEl: prevButton
			// }
		});
	});


}