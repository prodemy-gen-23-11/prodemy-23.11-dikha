import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProdukDetail from '../components/ProdukDetail';
import dataku from '../data/data';

function ProductPage() {
    
    
    const [dataProduk, setData] = useState(dataku[0]);
    function setProdukDetail(params) {
        setData(params);
    }

    const dataProductCard = [];
    for (const data of dataku) {
        if (data != dataProduk) {
            dataProductCard.push(data);
        }
    }

    return (
    <div>
        <div>
            <ProdukDetail {...dataProduk}/>
        </div>
        <div className='p-5 text-3xl'>
                Produk Kami:
        </div>
        <div className='flex place-content-center flex-row items-center gap-x-5 py-5'>
            {dataProductCard.map((dataProduk) => (
                <div key={dataProduk.id}>
                    <ProductCard title={dataProduk.nama} src={dataProduk.gambar[0]} price={`$${dataProduk.harga}`} onClick={() => setProdukDetail(dataProduk)}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductPage;