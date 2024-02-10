import React from 'react';
import dataku from '../data/data';
import Button from './Button';
import ProductCard from './ProductCard';

function ListProducts() {
    return (
        <div className='flex place-content-center flex-col items-center pt-5'>
            <div className=''>
                <Button>
                    Produk Kami
                </Button>
            </div>
            <div className='pt-5 text-7xl'>
                Produk Terbaik Yang Dapat Kami Berikan
            </div>
            <div className='py-10 grid items-center justify-center gap-5 grid-cols-3'>
                {dataku.map((data) => (
                    <div key={data.id}>
                        <ProductCard title={data.nama} src={data.gambar[0]} price={`$${data.harga}`} id={data.id} />
                    </div>
                ))}
                <Button>
                    Produk Lainnya
                </Button>
            </div>
        </div>
    )
}

export default ListProducts;