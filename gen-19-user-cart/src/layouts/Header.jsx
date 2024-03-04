import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { SiHomebridge } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HorizontalRule from "../components/HorizontalRule";
import headernav from "../data/headernav";
import checkAuthentications from "../route/checkAuthentications";
import { resetAuthData } from "../store/reducers/authSlice";
import { getDataCartFromApi } from "../store/reducers/cartSlice";



function Header() {

    const { hasLogin } = checkAuthentications();

    const [profileOpen, setProfileOpen] = useState(true);

    const dispatch = useDispatch();

    const { username, id } = useSelector((state) => state.auth?.user);

    useEffect(() => {
        // setUsername();
        setProfileOpen(profileOpen);
    }, [profileOpen]);

    useEffect(() => {
        dispatch(getDataCartFromApi(id));
    }, [])

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
                    <div className="relative">
                        <Link to={"/cart"}>
                            <CiShoppingCart className=" text-5xl" />
                        </Link>
                    </div>
                    <span>|</span>
                    {
                        !hasLogin ? <Link to={"/login"}> Login/Register </Link> :
                            <div className="relative">
                                <div className="text-xl ml-2 cursor-pointer select-none flex place-items-center gap-x-1" onClick={() => handleSetProfile()}>
                                    <div><CgProfile /></div>
                                    <div>{username}</div>
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
