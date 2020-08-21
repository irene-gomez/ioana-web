import React, { useContext } from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl';
import { Context } from './components/Wrapper';

function App() {
	const context = useContext(Context);
	const { locale, selectLang } = context;

	return (
		<div className="App">
			<select value={locale} onChange={selectLang}>
				<option value="en-GB">EN</option>
				<option value="es-ES">ES</option>
			</select>

			<ul>
				<li>
					<FormattedMessage id="nav.home" defaultMessage="Home" />
				</li>
				<li>
					<FormattedMessage id="nav.about" defaultMessage="About" />
				</li>
				<li>
					<FormattedMessage id="nav.notes" defaultMessage="Notes" />
				</li>
				<li>
					<FormattedMessage id="nav.contact" defaultMessage="Contact" />
				</li>
			</ul>
		</div>
	);
}

export default App;
