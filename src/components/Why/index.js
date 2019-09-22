import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

import Image from '../Image';
import React from 'react';

const Why = () => (
	<section className="why">
		<div className="why__wrapper">
			<Row>
				<Col xs={12}>
					<h1 className="why__title">
						That's why we created a platform that connects participants and
						mentors
					</h1>
					<Image className="why__image" alt="" src="/images/why.png" />
				</Col>
			</Row>
		</div>
	</section>
);
export default Why;
