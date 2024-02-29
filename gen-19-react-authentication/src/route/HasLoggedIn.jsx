import { Navigate, Outlet } from 'react-router-dom';
import checkAuthentications from './checkAuthentications';


export default function HasLoggedIn() {

    const { hasLogin } = checkAuthentications();

    if (hasLogin) {
        return <Navigate to={"/"} />
    }

    return <Outlet />
}
