import { useSelector } from "react-redux";
import { ROLE_ADMIN } from "../lib/library";



export default function checkAuthentications() {

    const hasLogin = useSelector((state) => state.auth.token !== "");
    const isRoleAdmin = useSelector((state) => state.auth.user?.role.includes(ROLE_ADMIN));

    return { hasLogin, isRoleAdmin };
}
