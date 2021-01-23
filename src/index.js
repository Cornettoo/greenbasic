import '../config/node_modules/regenerator-runtime/runtime';
import './public-path';

/* Modules */

import {
	nav
} from './scripts/nav'
nav();

import {
	slider
} from './scripts/slider'
slider();

import {
	accordion
} from './scripts/accordion'
accordion();

import {
	form
} from './scripts/form'
form();

import {
	account
} from './scripts/account'
account();

import {
	cart
} from './scripts/cart'
cart();

import "./styles/bundle.scss";