import App from './App';
import { AppRouter } from './routes/AppRouter';

export const AppContainer: React.FC = () => {
	return (
		<App>
			<AppRouter />
		</App>
	);
};
