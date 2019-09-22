import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

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
						<a
							href="https://www.producthunt.com/posts/hackontrol?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hackontrol"
							target="_blank"
						>
							<img
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=168615&theme=dark"
								alt="Hackontrol - Building a team in a hackathon has never been so easy! | Product Hunt Embed"
								style={{
									width: 250,
									height: 54
								}}
							/>
						</a>
					</Col>
				</Row>
			</Col>
		</Row>
	</section>
);

export default Header;
