
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCart({ title, src, harga, id }) {

    const navigate = useNavigate();
    const goToProductPage = (id) => {
        navigate(`/products/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='flex gap-x-10' onClick={() => goToProductPage(id)}>
            <img src={src} alt="" className='w-[10rem] rounded-2xl' />
            <div className='flex flex-col gap-y-5'>
                <span className='text-3xl'>{title}</span>
                <span>${harga}</span>
            </div>
        </div>
    )
}
