import React from 'react';
import ProductCard from '../components/ProductCard';
import dataku from '../data/data';

export default function AllProducts() {

    return (
        <div className='grid grid-cols-4 place-content-center gap-5 py-[7rem] px-32'>
            {
                dataku.map((item) =>
                    <div key={item.id} className='grid w-fit'>
                        <ProductCard title={item.nama} src={item.gambar[0]} price={`$${item.harga}`} id={item.id} />
                    </div>
                )
            }
        </div>
    )
}
