import { Navigate, Outlet } from 'react-router-dom';
import checkAuthentications from './checkAuthentications';

export default function HasLoggedIn() {

    const { hasNotLogin } = checkAuthentications();

    if (hasNotLogin) {
        return <Outlet />
    }

    return <Navigate to={"/"} />
}
