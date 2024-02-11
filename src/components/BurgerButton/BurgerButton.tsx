import React from 'react';
import { useState } from 'react';
import './BurgerButton.css';
import { Burger } from '../Burger/Burger.tsx';

export const BurgerButton = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const switchPopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<div className="burger-button">
			<button className="burger-button__image" onClick={switchPopup} />
			<Burger
				isPopupOpen={isPopupOpen}
				switchPopup={switchPopup}
			/>
		</div>
	);
};