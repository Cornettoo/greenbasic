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



	var galleryThumbs = new Swiper('.slider-thumbs', {
      slidesPerView: 'auto',
      watchSlidesVisibility: true,
		watchSlidesProgress: true,
		threshold: 10
	 });
	 
    var galleryTop = new Swiper('.slider-top', {
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

}