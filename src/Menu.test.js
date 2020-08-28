/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId } from '@testing-library/react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import IntlPolyfill from 'intl';
import menuOptions from './constants';
import Menu from './components/Menu';

const setupTests = () => {
	// https://formatjs.io/guides/runtime-environments/#server
	if (global.Intl) {
		Intl.NumberFormat = IntlPolyfill.NumberFormat;
		Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
	} else {
		global.Intl = IntlPolyfill;
	}
};

const renderWithReactIntl = (component) => {
	return render(
		<Router history={browserHistory}>
			<IntlProvider locale="en">{component}</IntlProvider>
		</Router>
	);
};

const FormattedMessageView = () => {
	return (
		<div data-testid="message-display">
			<FormattedMessage id="Hello" defaultMessage="Hello" />
		</div>
	);
};

setupTests();

// eslint-disable-next-line no-undef
describe('Menu component', () => {
	test('it should exists header component', () => {
		const { container } = renderWithReactIntl(
			<Menu menuOptions={menuOptions} />
		);
		expect(getByTestId(container, 'mainHeader')).toBeTruthy();
	});

	test('it should exists menu button', () => {
		const { container } = renderWithReactIntl(
			<Menu menuOptions={menuOptions} />
		);
		expect(getByTestId(container, 'menuBtn')).toBeTruthy();
	});

	test('it should render FormattedMessage and have a "Hello" text', () => {
		const { container } = renderWithReactIntl(<FormattedMessageView />);
		expect(getByTestId(container, 'message-display')).toHaveTextContent(
			'Hello'
		);
	});
});
