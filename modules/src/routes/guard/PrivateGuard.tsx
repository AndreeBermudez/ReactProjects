import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useEffect, useState } from 'react';
import { api } from '../../api/axiosConfig';
import { User } from '../../interfaces/user';

export const PrivateGuard: React.FC = () => {
	const { token, logout } = useAuthStore();
	const [isValidating, setIsValidating] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const validateToken = async () => {
			if (!token) {
				setIsValidating(false);
				setIsAuthenticated(false);
				return;
			}
			try {
				const response = await api.get<User>('/auth/validate');
				setIsAuthenticated(response.status === 200);
			} catch (error) {
				console.error('Error validando token:', error);
				logout();
				setIsAuthenticated(false);
			}finally {
				setIsValidating(false);
			  }
		};
		validateToken();
	}, [token, logout]);

	if (isValidating) {
		return <div>Cargando...</div>;
	}

	return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};
