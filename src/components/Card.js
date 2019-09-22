import React, { useEffect, useState } from 'react';
import './Card.css';

import moment from 'moment';

export default function Card({ item }) {
	const [lastUpdated, setLastUpdated] = useState(
		moment(item.updatedAt).fromNow()
	);

	let borderTop = null;

	if (item.status !== '' && item.status === 'ok') {
		borderTop = '40px solid #38DE7B';
	} else if (item.status !== '' && item.status === 'nok') {
		borderTop = '40px solid #E94A47';
	}

	useEffect(() => {
		setInterval(() => {
			setLastUpdated(moment(item.updatedAt).fromNow());
		}, 60000);
	}, []);

	return (
		<div className="card-container" style={{ borderTop }}>
			<header />
			<p>{item.name}</p>
			<label>{lastUpdated}</label>
		</div>
	);
}
