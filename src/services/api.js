import axios from 'axios';

const api = axios.create({
	// baseURL: 'https://hacktrack-open.herokuapp.com'
	baseURL: 'http://localhost:8080'
});

export default api;
