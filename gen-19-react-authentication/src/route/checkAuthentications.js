import { useSelector } from "react-redux";
import { ROLE_ADMIN, ROLE_CUSTOMER } from "../lib/library";



export default function checkAuthentications() {

    const hasLogin = useSelector((state) => state.auth.token !== "");
    const hasNotLogin = !hasLogin;
    const isRoleAdmin = useSelector((state) => state.auth.user?.role.includes(ROLE_ADMIN));
    const isRoleCustomer = useSelector((state) => state.auth.user?.role.includes(ROLE_CUSTOMER));

    return {
        hasLogin,
        hasNotLogin,
        isRoleAdmin,
        isRoleCustomer
    };
}
