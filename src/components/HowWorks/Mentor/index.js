import Image from '../../Image';
import React from 'react';

const Mentor = () => (
	<div>
		<ol className="how-works__list">
			<li className="how-works__item">
				<Image className="how-works__number" alt="" src="/images/1.png" />
				<h2 className="how-works__item-title">
					Follow all teams’ progress track along the event
				</h2>
			</li>
			<li className="how-works__item">
				<Image className="how-works__number" alt="" src="/images/2.png" />
				<h2 className="how-works__item-title">
					Give precise feedback at the right moment!
				</h2>
			</li>
			<li className="how-works__item">
				<Image className="how-works__number" alt="" src="/images/3.png" />
				<h2 className="how-works__item-title">
					Comment on team track so other mentors can see
				</h2>
			</li>
		</ol>
	</div>
);

export default Mentor;
