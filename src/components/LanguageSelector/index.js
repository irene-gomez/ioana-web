import React, { useContext } from 'react';
import { Context } from '../Wrapper';
import './styles.scss';

const LanguageSelector = () => {
	const context = useContext(Context);
	const { locale, selectLang } = context;

	return (
		<select
			className="lang-selector"
			value={locale}
			onChange={selectLang}
			data-testid="selectLanguage"
		>
			<option value="en-GB">EN</option>
			<option value="es-ES">ES</option>
		</select>
	);
};

export default LanguageSelector;
