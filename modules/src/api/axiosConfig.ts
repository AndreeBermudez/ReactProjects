import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3002/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use((config) => {
	const publicRoute = '/login';
	const isPublicRoute = config.url?.includes(publicRoute);
	if (!isPublicRoute) {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
	}
	return config},
	(error) => Promise.reject(error)
);

