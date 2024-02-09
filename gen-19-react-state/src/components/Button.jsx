import React from 'react';

export default function Button(props) {
    const {children, className = "bg-white hover:bg-black text-black hover:text-white"} = props;
    return (
        <div {...props} className = {`${className} flex gap-x-2 place-content-center items-center w-fit px-4 py-3 rounded-2xl border-solid border-black border-2 hover:scale-105 ease-in duration-100 cursor-pointer`}>
            {children}
        </div>
    )
}
