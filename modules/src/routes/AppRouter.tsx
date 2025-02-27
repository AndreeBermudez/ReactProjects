import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login/page';
import { PrivateGuard } from './guard/PrivateGuard';
import { PrivateRouter } from './PrivateRouter';
import { PublicGuard } from './guard/PublicGuard';

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to={'/login'} />} />
				<Route element={<PublicGuard />}>
					<Route path='/login' element={<LoginPage />} />
				</Route>
				<Route element={<PrivateGuard />}>
					<Route path='*' element={<PrivateRouter />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
