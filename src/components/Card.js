import React from 'react';
import './Card.css';

export default function Card({ item }) {
	return (
		<div className="card-container">
			<header />
			<p>{item.name}</p>
			<label>{item.stage}</label>
		</div>
	);
}
