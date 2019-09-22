import './index.scss';

import { Col, Row } from 'react-flexbox-grid';

import Logo from '../../components/Logo';
import React from 'react';

const Navbar = () => (
	<div className="navbar">
		<div className="navbar__wrapper">
			<Row>
				<Col cs={12} md={6}>
					<div className="navbar__logo">
						<Logo />
					</div>
				</Col>
				<Col cs={12} md={6}>
					<div className="navbar__links-wrapper">
						<ul className="navbar__links">
							<li className="navbar__link">home</li>
							<li className="navbar__link">our product</li>
							<li className="navbar__link">contact us</li>
						</ul>
					</div>
				</Col>
			</Row>
		</div>
	</div>
);

export default Navbar;
