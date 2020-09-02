import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Logo = () => {
	return (
		<h1 className="logo">
			<Link to="/">ioana ardelean</Link>
		</h1>
	);
};

export default Logo;
