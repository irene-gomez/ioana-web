import React from 'react';
import { FormattedMessage } from 'react-intl';
import TitleSection from '../TitleSection';
import './styles.scss';

const Contact = () => {
	return (
		<>
			<TitleSection id="nav.contact" message="Contact" />

			<p className="main-text">
				<FormattedMessage id="contact.info" defaultMessage="contact.info" />
			</p>

			<form className="form" action="/">
				<div className="form__item">
					<label className="form__label" htmlFor="completeName">
						<FormattedMessage id="contact.name" defaultMessage="contact.name" />

						<input
							className="form__input"
							id="completeName"
							name="completeName"
							type="text"
							required
						/>
					</label>
				</div>
				<div className="form__item form__item--email">
					<label className="form__label" htmlFor="email">
						<FormattedMessage
							id="contact.email"
							defaultMessage="contact.email"
						/>
						<input
							className="form__input form__input--email"
							id="email"
							name="email"
							type="email"
							placeholder="name.lastname@mail.com"
							required
						/>
					</label>
				</div>
				<div className="form__item form__item--textarea">
					<label className="form__label" htmlFor="message">
						<FormattedMessage
							id="contact.message"
							defaultMessage="contact.message"
						/>

						<textarea
							className="form__input form__text"
							id="message"
							name="message"
							cols="30"
							rows="10"
							placeholder="What do you need?"
						/>
					</label>
				</div>
				<div className="button__container">
					<button type="submit" className="button">
						<FormattedMessage
							id="contact.submit"
							defaultMessage="contact.submit"
						/>
					</button>
				</div>
			</form>
		</>
	);
};

export default Contact;
