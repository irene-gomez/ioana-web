import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import Wrapper from './components/Wrapper';
import App from './components/App';

ReactDOM.render(
	<HashRouter>
		<Wrapper>
			<App />
		</Wrapper>
	</HashRouter>,
	document.getElementById('root')
);
