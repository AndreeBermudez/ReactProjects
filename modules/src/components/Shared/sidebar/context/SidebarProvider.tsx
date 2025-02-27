import { useEffect, useState } from 'react';
import { SidebarContext } from './SidebarContext';

export function SidebarProvider({ children }: { children: React.ReactNode }) {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
	const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			setIsCollapsed(false);
			setIsMobileOpen(false);
		} else if (window.innerWidth >= 768) {
			setIsCollapsed(true);
			setIsMobileOpen(false);
		} else {
			setIsMobileOpen(false);
		}
	};
  
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize(); // Call once to set initial state
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const toggleCollapse = () => setIsCollapsed((prev) => !prev);
	const toggleMobile = () => setIsMobileOpen((prev) => !prev);

	return (
		<SidebarContext.Provider
			value={{
				isCollapsed,
				isMobileOpen,
				toggleCollapse,
				toggleMobile,
			}}>
			{children}
		</SidebarContext.Provider>
	);
}
