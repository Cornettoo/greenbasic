import {
	Swiper,
	Navigation,
	Pagination,
	Controller,
	Thumbs
} from '../../config/node_modules/swiper/swiper.esm.js';
Swiper.use([Navigation, Pagination, Controller, Thumbs]);

export function slider() {
	console.log('hello');
	
}