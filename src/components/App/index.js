import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../Menu';
import Home from '../Home';
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import './styles.scss';
import menuOptions from '../../constants';

const App = () => {
	return (
		<div className="App">
			<Menu menuOptions={menuOptions} />
			<main className="main-content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about-me" component={AboutMe} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
