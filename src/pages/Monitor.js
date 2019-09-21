import React, { Fragment } from 'react';
import './Monitor.css';
import Header from '../components/Header';
import Board from '../components/Board';

export default function Monitor({ match }) {
	return (
		<Fragment>
			<Header />
			<div className="monitor-container">
				<div className="title">
					<h2>TEAMS TRACK</h2>
				</div>
				<Board hackathon={match.params.id} />
			</div>
		</Fragment>
	);
}
