import { Navigate, Route, Routes } from 'react-router-dom';
import { ReportsPage } from '../pages/reports';
import { SalesPage } from '../pages/sales';
import { HomePage } from '../pages/home/page';
import { CashPage } from '../pages/cash/page';
import { ExpensesPage } from '../pages/expenses/page';
import { ProductsPage } from '../pages/products/page';

export const PrivateRouter: React.FC = () => {
	return (
			<Routes>
				<Route path='/' element={<Navigate to={'inicio'} />} />
				<Route path='inicio' element={<HomePage />} />
				<Route path='caja' element={<CashPage />} />
				<Route path='ventas' element={<SalesPage />} />
				<Route path='gastos' element={<ExpensesPage />} />
				<Route path='productos' element={<ProductsPage />} />
				<Route path='reportes' element={<ReportsPage />} />
			</Routes>
	);
};
