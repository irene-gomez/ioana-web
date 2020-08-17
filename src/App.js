import React from 'react';
import './App.css';
import { FormattedMessage } from 'react-intl';

function App() {
	return (
		<div className="App">
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
