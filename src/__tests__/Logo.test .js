/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId } from '@testing-library/react';
import Logo from '../components/Logo';

describe('<Menu />', () => {
	test('it should exists the component', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<Logo />
			</Router>
		);

		expect(getByTestId(container, 'logo')).toBeTruthy();
	});

	test('it should contain the text "ioana ardelean"', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<Logo />
			</Router>
		);

		expect(getByTestId(container, 'logo')).toHaveTextContent('ioana ardelean');
	});
});
