'use strict';

import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import account from './account';
import AppComponent from './components/App.jsx';
import polyfills from '../../iso/polyfills.js';
import Midsection from './stores/Midsection.js';
import UserInfo from './stores/UserInfo.js';
import GameInfo from './stores/GameInfo.js';
import GeneralChats from './stores/GeneralChats.js';
import GameList from './stores/GameList.js';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('game-container');

	account();
	polyfills();

	console.log('%c%s', 'color: teal; background: #eee; font-size: 14px; font-style: italic; font-family: verdana', 'Secret Hitler');

	if (container) {
		render(
			<AppComponent
				midsection={new Midsection()}
				userInfo={new UserInfo()}
				gameInfo={new GameInfo()}
				generalChats={new GeneralChats()}
				gameList={new GameList()}
			/>
		, container);
	}

	$(document).keydown(function(e) {
		if (e.ctrlKey && e.keyCode === 65) {
			return false;
		}
	});
});