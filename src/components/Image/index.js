import './index.scss';

import React from 'react';

const Image = ({ alt, src, className }) => (
	<img alt={alt} className={`image ${className ? className : ''}`} src={src} />
);

export default Image;
