import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const TitleSection = ({ id, message }) => {
	return (
		<h2>
			<FormattedMessage id={id} defaultMessage={message} />
		</h2>
	);
};

TitleSection.propTypes = {
	id: PropTypes.string,
	message: PropTypes.string,
};

export default TitleSection;
