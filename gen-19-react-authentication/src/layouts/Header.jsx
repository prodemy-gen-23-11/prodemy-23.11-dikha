import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { SiHomebridge } from "react-icons/si";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HorizontalRule from "../components/HorizontalRule";
import headernav from "../data/headernav";
import checkAuthentications from "../route/checkAuthentications";
import { resetAuthData } from "../store/reducers/authSlice";


function Header() {

    const { hasLogin } = checkAuthentications();

    const [username, setUsername] = useState("");

    const [profileOpen, setProfileOpen] = useState(true);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        setUsername(JSON.parse(localStorage.getItem('user'))?.username);
        setProfileOpen(profileOpen);
    }, [username, profileOpen]);

    function handleLogout() {
        alert("Logout Berhasil");
        dispatch(resetAuthData());
    }


    const handleSetProfile = () => {
        setProfileOpen(!profileOpen);
    }

    return (
        <div>
            <div className="flex place-content-between text-2xl flex-row py-[8px] px-36 text-black">
                <div className="flex items-center gap-1">
                    <SiHomebridge /> Dekor
                </div>
                <div className="flex items-center gap-[7rem]">
                    {headernav.map((header) => (
                        <div key={header.nama}>
                            <Link to={header.link}>
                                {header.nama}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-x-1">
                    <Link to={"#"}>
                        <CiSearch />
                    </Link>
                    <Link to={"/cart"}>
                        <CiShoppingCart />
                    </Link>
                    {
                        !hasLogin ? <Link to={"/login"}> Login </Link> :
                            <div className="relative">
                                <div className="text-xl ml-2 cursor-pointer select-none" onClick={() => handleSetProfile()}>
                                    <CgProfile />{username}
                                </div>
                                {
                                    profileOpen ? "" :
                                        <div className="absolute text-lg flex flex-col gap-y-2 bg-white p-2 rounded-xl">
                                            <div className="hover:bg-slate-300 rounded-xl p-1 cursor-pointer" onClick={() => handleLogout()}>Logout</div>
                                        </div>
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="pb-1">
                <HorizontalRule />
            </div>
        </div>
    );
}

export default Header;
