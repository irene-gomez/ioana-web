import React from 'react';
import Menu from '../Menu';

const menuOptions = [
	{
		id: 'nav.home',
		defaultMessage: 'Home',
	},
	{
		id: 'nav.about',
		defaultMessage: 'About',
	},
	{
		id: 'nav.notes',
		defaultMessage: 'Notes',
	},
	{
		id: 'nav.contact',
		defaultMessage: 'Contact',
	},
];

const App = () => {
	return (
		<div className="App">
			<Menu menuOptions={menuOptions} />
		</div>
	);
};

export default App;
