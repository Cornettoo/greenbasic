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
			nextButton = slider.getElementsByClassName('slider__buttons__item--next')[0],
			allowTouchMoveDesktop = true;
			
		if (slider.classList.contains('slider--blocks--mobile')) {
			allowTouchMoveDesktop = false;
		}

		let sliderInstance = new Swiper(slider, {
			slidesPerView: 'auto',
			allowTouchMove: true,

			navigation: {
				nextEl: nextButton,
				prevEl: prevButton
			},

			breakpoints: {
				992: {
					allowTouchMove: allowTouchMoveDesktop
				}
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
	let sliderFeaturedColl = document.querySelectorAll('.featured-cat__blocks'),
		mySwiper = undefined;

	function initSwiper() {
		let screenWidth = window.innerWidth;
		if (screenWidth < 1200 && mySwiper == undefined) {
			sliderFeaturedColl.forEach(slider => {
				let prevButton = slider.getElementsByClassName('slider__buttons__item--prev')[0],
					nextButton = slider.getElementsByClassName('slider__buttons__item--next')[0];

				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					loop: false,

					navigation: {
						nextEl: nextButton,
						prevEl: prevButton
					}
				});
			});
		} else if (screenWidth > 1199 && mySwiper != undefined) {
			mySwiper.destroy();
			mySwiper = undefined;
		}
	}

	initSwiper();

	window.addEventListener('resize', () => {
		initSwiper();
	});
}