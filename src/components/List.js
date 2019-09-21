import React from 'react';
import './List.css';

import Card from './Card';

export default function List({ name, data }) {
	return (
		<div className="list-container">
			<header>
				<h2>{name}</h2>
			</header>
			{data && data.length > 0 ? (
				<ul>
					{data.map(item => (
						<Card key={item._id} item={item} />
					))}
				</ul>
			) : null}
		</div>
	);
}
