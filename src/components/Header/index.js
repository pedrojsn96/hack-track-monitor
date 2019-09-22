import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

import Button from '../Button';
import Image from '../Image';
import React from 'react';

const Header = () => (
	<section className="header">
		<Row>
			<Col xs={12} md={5}>
				<Image alt="" src="/images/header.png" />
			</Col>
			<Col xs={12} md={6} mdOffset={1}>
				<h1>
					Create stress-free hackathons and increase mentoring productivity
				</h1>
				<p>
					Have you ever wondered what would be like to participate in the
					perfect hackathon? Well, we can help you achieve that.
				</p>
				<Row>
					<Col xs={12} xl={6}>
						<Button primary>Download for iOS</Button>
					</Col>
					<Col xs={12} xl={6}>
						<Button primary>Download for Android</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	</section>
);

export default Header;
