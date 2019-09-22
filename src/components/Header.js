import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../assets/logo-complete.png';

export default function Header() {
	return (
		<div className="header-container">
			<Link to="/">
				<img src={logo} alt="Hackatrack" />
			</Link>
		</div>
	);
}
