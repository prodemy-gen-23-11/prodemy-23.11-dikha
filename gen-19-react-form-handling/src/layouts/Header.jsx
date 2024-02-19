import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { SiHomebridge } from "react-icons/si";
import { Link } from "react-router-dom";
import HorizontalRule from "../components/HorizontalRule";
import headernav from "../data/headernav";

function Header() {
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
                    <a href="#">
                        <CiSearch />
                    </a>
                    <a href="#">
                        <CiShoppingCart />
                    </a>
                    |<a href="#">Login</a>
                </div>
            </div>
            <div className="pb-1">
                <HorizontalRule />
            </div>
        </div>
    );
}

export default Header;
