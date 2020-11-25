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


import "./styles/bundle.scss";