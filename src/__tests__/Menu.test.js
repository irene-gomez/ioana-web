/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId, getAllByTestId } from '@testing-library/react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import menuOptions from '../constants';
import Wrapper from '../components/Wrapper';
import Menu from '../components/Menu';

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

describe('<Menu />', () => {
	test('it should exists header component', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<Menu menuOptions={menuOptions} />
			</Router>,
			{
				wrapper: Wrapper,
			}
		);

		expect(getByTestId(container, 'mainHeader')).toBeTruthy();
	});

	test('it should exists menu button', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<Menu menuOptions={menuOptions} />
			</Router>,
			{
				wrapper: Wrapper,
			}
		);

		expect(getByTestId(container, 'menuBtn')).toBeTruthy();
	});

	test('it should render FormattedMessage and have a "Hello" text', () => {
		const { container } = renderWithReactIntl(<FormattedMessageView />);

		expect(getByTestId(container, 'message-display')).toHaveTextContent(
			'Hello'
		);
	});

	test('it should render Menu component and check 4 items', () => {
		const { container } = render(
			<Router history={browserHistory}>
				<Menu menuOptions={menuOptions} />
			</Router>,
			{
				wrapper: Wrapper,
			}
		);
		const links = getAllByTestId(container, 'linkNav');

		expect(links).toHaveLength(4);
	});
});
