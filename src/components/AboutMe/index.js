import React from 'react';
import { FormattedMessage } from 'react-intl';
import TitleSection from '../TitleSection';
import './styles.scss';

const AboutMe = () => {
	return (
		<>
			<TitleSection id="nav.about" message="About me" />
			<p className="main-text">
				<FormattedMessage id="home.one" defaultMessage="home.one" />
			</p>
			<p className="main-text">
				<FormattedMessage id="home.two" defaultMessage="home.two" />
			</p>
			<p className="main-text">
				<FormattedMessage id="home.three" defaultMessage="home.three" />
			</p>
		</>
	);
};

export default AboutMe;
