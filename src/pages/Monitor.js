import React, { Fragment } from 'react';
import io from 'socket.io-client';
import './Monitor.css';
import Header from '../components/Header';
import Board from '../components/Board';

export default function Monitor({ match }) {
	return (
		<Fragment>
			<Header />
			<div className="monitor-container">
				<div className="title">
					<h2>Nome do Hackathon - TEAMS TRACK</h2>
				</div>
				<Board hackathon={match.params.id} />
			</div>
		</Fragment>
	);
}
