import './index.scss';

import React from 'react';

const Button = ({ primary, secondary, goTo, ...props }) => (
	<a
		href={goTo}
		target="blank"
		className={`button ${primary ? 'button--primary' : ''} ${
			secondary ? 'Button--secondary' : ''
		}`}
		{...props}
	></a>
);

export default Button;
