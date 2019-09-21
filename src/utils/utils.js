export const filterTeam = (data, filter) =>
	data.filter(function(team) {
		return team.stage === filter;
	});
