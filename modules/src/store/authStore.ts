import { create } from 'zustand';
import { LoginCredentials, LoginResponse } from '../interfaces/auth';
import { api } from '../api/axiosConfig';
import { User } from '../interfaces/user';

interface AuthStore {
	token: string | null;
	user: User | null;
	isAuthenticated : boolean;
	login: (credentials: LoginCredentials) => Promise<LoginResponse | undefined>;
	logout: () => void;
	checkAuth: () => Promise<boolean>;
}

export const useAuthStore = create<AuthStore>((set,get) => ({
	token: localStorage.getItem('token'),
	user: null,
	isAuthenticated: !!localStorage.getItem('token'),
	login: async (credentials: LoginCredentials) => {
		try {
			const { data } = await api.post<LoginResponse>('/auth/login', credentials);
			localStorage.setItem('token', data.token);
			set({ token: data.token, user: data.user, isAuthenticated: true });
			return data;
		} catch (error) {
			console.error(error);
		}
	},
	logout: () => {
		localStorage.removeItem('token');
		set({ token: null, user: null, isAuthenticated: false });
	},
	checkAuth: async () => {
		try {
			const { data } = await api.get<User>('/auth/validate');
			set({ user: data });
			return true;
		} catch (error) {
			console.error(error);
			get().logout();
			return false;
		}
	}
}));
