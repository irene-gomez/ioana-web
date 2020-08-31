/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId } from '@testing-library/react';
import IntlPolyfill from 'intl';
import Wrapper from './components/Wrapper';
import LanguageSelector from './components/Menu';

const setupTests = () => {
	// https://formatjs.io/guides/runtime-environments/#server
	if (global.Intl) {
		Intl.NumberFormat = IntlPolyfill.NumberFormat;
		Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
	} else {
		global.Intl = IntlPolyfill;
	}
};

setupTests();

// eslint-disable-next-line no-undef
describe('<LanguageSelector />', () => {
	test('it should exist the component', () => {
		const { container } = render(<LanguageSelector />, { wrapper: Wrapper });
		const select = getByTestId(container, 'selectLanguage');

		expect(select).toHaveTextContent('EN');
	});
});
