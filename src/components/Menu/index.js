import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import LanguajeSelector from '../LanguajeSelector';

const Menu = ({ menuOptions }) => {
	return (
		<header>
			<LanguajeSelector />
			<ul>
				{menuOptions.map((option, index) => (
					<li key={index}>
						<FormattedMessage
							id={option.id}
							defaultMessage={option.defaultMessage}
						/>
					</li>
				))}
			</ul>
		</header>
	);
};

Menu.propTypes = {
	menuOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
