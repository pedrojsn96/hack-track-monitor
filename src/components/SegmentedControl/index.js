import './index.scss';

import React from 'react';

const SegmentedControl = ({
	left,
	right,
	leftClick,
	rightClick,
	leftSelected,
	rightSelected
}) => (
	<div className="segmented-control">
		<button
			onClick={leftClick}
			className={`segmented-control__item segmented-control__item--left ${
				leftSelected ? 'segmented-control__item--selected' : ''
			}`}
		>
			{left}
		</button>
		<button
			onClick={rightClick}
			className={`segmented-control__item segmented-control__item--right ${
				rightSelected ? 'segmented-control__item--selected' : ''
			}`}
		>
			{right}
		</button>
	</div>
);

export default SegmentedControl;
