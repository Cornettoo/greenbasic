import '../config/node_modules/regenerator-runtime/runtime';
import './public-path';

/* Modules */
async function loadNav() {
	if (document.querySelector('nav')) {
		let nav = await import('./scripts/nav');
		nav.nav();
	}
}
loadNav();

async function loadSlider() {
	if (document.querySelector('.slider')) {
		let slider = await import('./scripts/slider');
		slider.slider();
	}
}
loadSlider();


import "./styles/bundle.scss";