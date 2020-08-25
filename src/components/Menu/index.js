import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import LanguajeSelector from '../LanguajeSelector';
import './styles.scss';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.handleClickMenu = this.handleClickMenu.bind(this);
	}

	handleClickMenu() {
		this.isMenuOpen();
	}

	isMenuOpen() {
		const { isOpen } = this.state;

		return isOpen
			? this.setState({ isOpen: false })
			: this.setState({ isOpen: true });
	}

	render() {
		const { menuOptions } = this.props;
		const { isOpen } = this.state;

		return (
			<header className="main-header">
				<LanguajeSelector />

				<div
					className="menu-btn"
					onClick={this.handleClickMenu}
					aria-hidden="true"
				/>

				<nav className={`main-nav ${isOpen ? 'is-active' : ''}`}>
					<ul className="main-nav__list">
						{menuOptions.map((option, index) => (
							<li className="main-nav__item" key={index}>
								<FormattedMessage
									id={option.id}
									defaultMessage={option.defaultMessage}
								/>
							</li>
						))}
					</ul>
				</nav>
			</header>
		);
	}
}

Menu.propTypes = {
	menuOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
