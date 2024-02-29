import React from "react";

export default function Button(props) {
    const {
        type,
        children,
        className = "bg-white hover:bg-black text-black hover:text-white",
    } = props;
    return (
        <button
            {...props}
            type={type}
            className={`${className} flex place-content-center items-center w-fit px-2 py-1 rounded-2xl border-solid border-black border-2 hover:scale-105 ease-in duration-100 cursor-pointer`}
        >
            {children}
        </button>
    );
}
