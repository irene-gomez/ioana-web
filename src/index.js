import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IntlProvider } from 'react-intl';
import App from './App';
import Spanish from './languages/es-ES.json';
import English from './languages/en-GB.json';

const locale = navigator.language;

let lang;
if (locale === 'es-ES') {
	lang = Spanish;
} else {
	lang = English;
}

ReactDOM.render(
	<IntlProvider locale={locale} messages={lang}>
		<App />
	</IntlProvider>,
	document.getElementById('root')
);
