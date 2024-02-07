import React from 'react';

function Button(props) {

    const {className = "bg-sky-300", children} = props;
    return (
        <button {...props} className={`${className} flex items-center gap-x-2 px-3 py-5 rounded-2xl`}>
            {children}
        </button>
    )
}

export default Button;