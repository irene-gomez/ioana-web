import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import Wrapper from './components/Wrapper';

ReactDOM.render(
	<Wrapper>
		<App />
	</Wrapper>,
	document.getElementById('root')
);
