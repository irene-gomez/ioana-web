/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId } from '@testing-library/react';
import Wrapper from '../components/Wrapper';
import LanguageSelector from '../components/Menu';

describe('<LanguageSelector />', () => {
	test('it should exist the component', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<LanguageSelector />
			</Router>,
			{ wrapper: Wrapper }
		);
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toBeTruthy();
	});

	test('it should contain the text "EN"', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<LanguageSelector />
			</Router>,
			{ wrapper: Wrapper }
		);
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toHaveTextContent('EN');
	});

	test('it should contain the text "ES"', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<LanguageSelector />
			</Router>,
			{ wrapper: Wrapper }
		);
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toHaveTextContent('ES');
	});
});
