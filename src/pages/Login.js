import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo-complete.png';
import api from '../services/api';

export default function Login({ history }) {
	const [identifier, setIdentifier] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();
		const response = await api.get(`/hackathons?identifier=${identifier}`);
		const { _id } = response.data;
		history.push(`/monitor/${_id}`);
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<img src={logo} alt="Hacktrack" />
				<input
					placeholder="Type your hackathon identifier"
					value={identifier}
					onChange={event => setIdentifier(event.target.value)}
				/>
				<button type="submit">Join</button>
			</form>
		</div>
	);
}
