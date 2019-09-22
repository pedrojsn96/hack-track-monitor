import './index.scss';

import React from 'react';

const Button = ({ primary, secondary, onCLick, ...props }) => (
	<button
		onClick={onCLick}
		className={`button ${primary ? 'button--primary' : ''} ${
			secondary ? 'Button--secondary' : ''
		}`}
		{...props}
	></button>
);

export default Button;
