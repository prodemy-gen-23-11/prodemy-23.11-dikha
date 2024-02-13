import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import Button from './Button';
import ProductCard from './ProductCard';

function ListProducts() {

    const getProducts = (url) => axios.get(url).then((res) => res.data);
    const { data : allData } = useSWR(`http://localhost:3000/products`, getProducts);

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
                {allData?.map((data) => (
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