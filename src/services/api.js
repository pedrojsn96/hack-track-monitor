import axios from 'axios';

const api = axios.create({
	baseURL: 'https://hacktrack-open.herokuapp.com'
});

export default api;
