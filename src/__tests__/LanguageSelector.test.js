/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId } from '@testing-library/react';
import Wrapper from '../components/Wrapper';
import LanguageSelector from '../components/Menu';

// eslint-disable-next-line no-undef
describe('<LanguageSelector />', () => {
	test('it should exist the component', () => {
		const { container } = render(<LanguageSelector />, { wrapper: Wrapper });
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toBeTruthy();
	});

	test('it should contain the text "EN"', () => {
		const { container } = render(<LanguageSelector />, { wrapper: Wrapper });
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toHaveTextContent('EN');
	});

	test('it should contain the text "ES"', () => {
		const { container } = render(<LanguageSelector />, { wrapper: Wrapper });
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toHaveTextContent('ES');
	});
});
