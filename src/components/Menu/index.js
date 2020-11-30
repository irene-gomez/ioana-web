import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import LanguageSelector from '../LanguageSelector';
import './styles.scss';
import Logo from '../Logo';

function Menu({ menuOptions }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="main-header" data-testid="mainHeader">
			<Logo />
			<button
				data-testid="menuBtn"
				type="button"
				className={`menu-btn ${
					isMenuOpen ? 'menu-btn__close' : 'menu-btn__open'
				}`}
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-hidden="true"
				aria-label="Abrir menú"
				tabIndex="-1"
			/>

			<nav className={`main-nav ${isMenuOpen ? 'is-active' : ''}`}>
				<ul className="main-nav__list">
					{menuOptions &&
						menuOptions.map((item, index) => (
							<li className="main-nav__item" key={index}>
								<Link
									data-testid="linkNav"
									className="main-nav__link"
									to={item.route}
									onClick={() => setIsMenuOpen(!isMenuOpen)}
								>
									<FormattedMessage
										id={item.id}
										defaultMessage={item.defaultMessage}
									/>
								</Link>
							</li>
						))}
				</ul>
			</nav>
			<LanguageSelector />
		</header>
	);
}

Menu.propTypes = {
	menuOptions: PropTypes.arrayOf(PropTypes.object),
};

export default Menu;
