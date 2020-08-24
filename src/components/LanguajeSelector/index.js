import React, { useContext } from 'react';
import { Context } from '../Wrapper';

const LanguajeSelector = () => {
	const context = useContext(Context);
	const { locale, selectLang } = context;

	return (
		<select value={locale} onChange={selectLang}>
			<option value="en-GB">EN</option>
			<option value="es-ES">ES</option>
		</select>
	);
};

export default LanguajeSelector;
