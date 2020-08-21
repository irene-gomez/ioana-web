import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import Spanish from '../languages/es-ES.json';
import English from '../languages/en-GB.json';

export const Context = React.createContext();
const local = 'en-GB';
let lang;

if (local === 'en-GB') {
	lang = English;
} else {
	lang = Spanish;
}

const Wrapper = ({ children }) => {
	const [locale, setLocale] = useState(local);
	const [messages, setMessages] = useState(lang);

	function selectLang(e) {
		const newLocale = e.target.value;
		setLocale(newLocale);

		if (newLocale === 'es-ES') {
			setMessages(Spanish);
		} else {
			setMessages(English);
		}
	}

	return (
		<Context.Provider value={{ locale, selectLang }}>
			<IntlProvider messages={messages} locale={locale}>
				{children}
			</IntlProvider>
		</Context.Provider>
	);
};

Wrapper.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Wrapper;
