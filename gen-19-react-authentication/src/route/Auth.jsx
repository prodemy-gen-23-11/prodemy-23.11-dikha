import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Auth(props) {

    const isThereFalse = Object.values(props).includes(false);
    const keyProps = Object.keys(props);
    const valProps = Object.values(props);
    let whoIsFalse = [];

    for (let index = 0; index < keyProps.length; index++) {
        if (valProps[index] == false) {
            whoIsFalse.push(keyProps[index])
        }
    }

    if (!isThereFalse) {
        return <Outlet />
    }
    const { pathname } = useLocation();
    console.log("dari auth", pathname)
    alert(`Autentikasi ${whoIsFalse.map(item => " " + item)} Dibutuhkan`);
    return <Navigate to={"/"} />
}
