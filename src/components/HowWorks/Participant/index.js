import Image from '../../Image';
import React from 'react';

const Participant = () => (
	<div>
		<ol className="how-works__list">
			<li className="how-works__item">
				<Image className="how-works__number" alt="" src="/images/1.png" />
				<h2 className="how-works__item-title">Pick or create a team</h2>
			</li>
			<li className="how-works__item">
				<Image className="how-works__number" alt="" src="/images/2.png" />
				<h2 className="how-works__item-title">
					Give status updates with comments and photos
				</h2>
			</li>
			<li className="how-works__item">
				<Image className="how-works__number" alt="" src="/images/3.png" />
				<h2 className="how-works__item-title">
					Get mentor’s feedback precisely when you need it
				</h2>
			</li>
		</ol>
	</div>
);

export default Participant;
