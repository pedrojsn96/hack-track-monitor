import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

import Image from '../Image';
import React from 'react';

const Mentoring = () => (
	<section className="mentoring">
		<Row>
			<Col xs={12} md={6} first="md">
				<Image alt="" src="/images/mentoring.png" />
			</Col>
			<Col xs={12} md={6} first="xs">
				<div className="mentoring__text-wrapper">
					<h1>And mentoring can be repetitive.</h1>
					<p>
						During the hackathon there are a lot of mentoring times, and
						sometimes you have to repeat yourself explaining the idea, what have
						you done till now, how things are going etc...
					</p>
				</div>
			</Col>
		</Row>
	</section>
);

export default Mentoring;
