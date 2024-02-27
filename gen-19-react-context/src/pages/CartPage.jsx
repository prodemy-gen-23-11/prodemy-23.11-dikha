import axios from 'axios';
import React, { useContext } from 'react';
import useSWR from 'swr';
import Button from '../components/Button';
import ProductCart from '../components/ProductCart';
import { CheckoutContext } from '../context/Cart';


function getAllProductsOnCart(arr) {
    let allProducts = [];
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    for (const item of arr) {
        const { data } = useSWR(`http://localhost:3000/products/${item.id}`, fetcher);
        allProducts.push(data)
    }
    return allProducts;
}

export default function CartPage() {

    const { dataCart, setDataCart } = useContext(CheckoutContext);
    // console.log(dataCart)

    const AllProducts = getAllProductsOnCart(dataCart)
    // console.log(productsOnCart);

    let totalPrice = 0;
    AllProducts.forEach(item => totalPrice += parseInt(item.harga));
    console.log(totalPrice);

    function hapusDatacart(id) {
        setDataCart([...dataCart])
        console.log(dataCart)
    }


    return (
        <div className='my-10 mx-[10rem] min-h-[30rem] flex'>
            <div className='m-2 h-full w-4/6 flex'>
                <div className=' w-full'>
                    {
                        AllProducts?.map((item, index) => (
                            <div key={item.id}>
                                <div className='grid grid-cols-2 place-items-center place-content-between m-2 border-2 border-red-500 rounded-2xl bg-slate-200'>
                                    <ProductCart title={item.nama} src={item.gambar[0]} harga={item.harga} id={item.id} />
                                    <Button onClick={() => hapusDatacart(item.id)}>Hapus</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-2/6 text-3xl bg-slate-200 rounded-xl'>
                Total Harga: ${totalPrice}
            </div>
        </div>
    )
}
