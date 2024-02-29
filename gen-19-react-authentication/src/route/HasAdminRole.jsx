

import { Navigate, Outlet } from 'react-router-dom';
import checkAuthentications from './checkAuthentications';

export default function HasAdminRole() {

    const { hasLogin, isRoleAdmin } = checkAuthentications();

    if (hasLogin && isRoleAdmin) {
        return <Outlet />
    }
    alert("Anda Belum Login Atau Role Anda Bukan Admin");
    return <Navigate to={"/login"} />

}
