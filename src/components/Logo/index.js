import './index.scss';

import React from 'react';

const Logo = ({ inverse }) => (
	<img
		alt="hackatrack"
		className="logo"
		src={`${inverse ? '/images/logo-2.png' : '/images/logo.png'}`}
	/>
);

export default Logo;
