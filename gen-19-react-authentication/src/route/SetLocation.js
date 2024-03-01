import { useLocation } from "react-router-dom";


export function SetLocation() {

    const { pathname } = useLocation()
    console.log(pathname);
    return pathname;
}