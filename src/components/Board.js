import React, { useState, useEffect } from 'react';
import './Board.css';

import List from './List';

import api from '../services/api';
import { filterTeam } from '../utils/utils';

export default function Board({ hackathon }) {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		async function loadTeams() {
			const response = await api.get(`/teams?hackaId=${hackathon}`);
			setTeams(response.data);
		}
		loadTeams();
	}, []);

	return (
		<div className="board-container">
			<List name={'Ideation'} data={filterTeam(teams, 'Ideation')} />
			<List
				name={'Problem Definition'}
				data={filterTeam(teams, 'Problem Definition')}
			/>
			<List name={'Validation'} data={filterTeam(teams, 'Validation')} />
			<List name={'Solution'} data={filterTeam(teams, 'Solution')} />
			<List name={'Product'} data={filterTeam(teams, 'Product')} />
			<List name={'Pitch'} data={filterTeam(teams, 'Pitch')} />
		</div>
	);
}
