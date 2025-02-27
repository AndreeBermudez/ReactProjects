import { Navigate, Outlet } from "react-router-dom"

export const PublicGuard: React.FC = () => {
    const token = localStorage.getItem('token')
    if (token) {
        return <Navigate to="/ventas" replace />;
    }
    return <Outlet/>
}