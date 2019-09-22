import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

import Image from '../Image';
import React from 'react';

const Stressful = () => (
	<section className="stressful">
		<Row>
			<Col xs={12} md={6}>
				<div className="stressful__text-wrapper">
					<h1>Hackathons are stressful, we know.</h1>
					<p>
						We know hackathons can be hard, especially when things are not going
						great and you are up to a challenge to be resolved in 24 hours or
						more
					</p>
				</div>
			</Col>
			<Col xs={12} md={6}>
				<Image alt="" src="/images/stressful.png" />
			</Col>
		</Row>
	</section>
);

export default Stressful;
