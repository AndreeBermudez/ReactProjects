import { SidebarProvider } from '../components/Shared/sidebar/context/SidebarProvider';
import { Sidebar } from '../components/Shared/sidebar/Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='flex w-full h-screen'>
			<SidebarProvider>
				<Sidebar />
				{children}
			</SidebarProvider>
		</main>
	);
};


