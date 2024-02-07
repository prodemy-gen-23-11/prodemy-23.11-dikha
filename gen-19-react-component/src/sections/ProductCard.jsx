import React from 'react';
import Button from '../components/Button';

import { Heart, ShoppingCart } from 'tabler-icons-react';


function ProductCard(props){
    const {title, price, src} = props;
    return (
        <section className='box-border border-1 flex items-center'>
            <div className='py-2 shadow-xl'>
                <div className='max-w-96 p-2'>
                    <img className='rounded-xl shadow-xl hover:scale-105' src={src}/>
                </div>
                <div className='text-5xl font-semibold pt-5 pl-2'>
                    <h1>{title}</h1>
                </div>
                <div className='text-2xl pt-3 text-right pr-5'>
                    {price}
                </div>
                <div className='flex place-content-evenly flex-row gap-x-6 pt-10'>
                    <Button className="bg-green-400 hover:bg-green-600">
                        <ShoppingCart />
                        Add To Cart
                    </Button>
                    <Button className="bg-sky-400 hover:bg-sky-600">
                        <Heart />
                        Add To Whislist
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;