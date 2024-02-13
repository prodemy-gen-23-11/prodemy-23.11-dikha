import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import useSWR from 'swr';
import Button from './Button';

function ProdukDetail(props) {
    const { id } = props;

    const getProduct = (url) => axios.get(url).then((res) => res.data);
    const { data : mainData } = useSWR(`http://localhost:3000/products/${id}`, getProduct);
    console.log(id);

    const [image, setImage] = useState(mainData?.gambar[0]);
    function setMainImage(newImage) {
        setImage(newImage);
    }

    useEffect(() => {
        setImage(mainData?.gambar[0]);
    },[mainData])


    return (
        <div className='flex min-h-screen gap-x-5 flex-cols-2 px-48 py-32'>
            <div className='w-3/5 flex flex-cols-2 gap-x-3'>
                <div className='w-3/4'>
                    <img src={image} alt="" className='rounded-xl'/>
                </div>
                <div className='w-1/4 grid gap-y-3'>
                    {
                        mainData?.gambar.map((g, index) => (
                            <img key={index} src={g} alt="" onClick={() => setMainImage(g)} className='rounded-xl active:scale-95'/>
                        ))
                    }
                </div>
            </div>
            <div className='w-2/5 px-3'>
                <div className='text-5xl'>
                    {mainData?.nama}
                </div>
                <div className='py-10 px-3 text-right text-3xl'>
                    ${mainData?.harga}
                </div>
                <div className='text-justify text-lg max-h-52'>
                    {mainData?.deskripsi} 
                </div>
                {
                    <div className='py-10 text-2xl gap-x-1 flex flex-row items-center'>
                        warna : {
                            mainData?.warna.map((w, index) => (
                                <span key={index} className={`w-10 h-10 ${w} rounded-full active:scale-90`}></span>
                            ))
                        }
                </div>}
                <div className='flex justify-evenly'>
                    <Button className=" bg-emerald-300 hover:bg-emerald-500 text-black hover:text-white">
                        <CiShoppingCart size={"2em"} /> Add To Cart
                    </Button>
                    <Button className="bg-sky-300 hover:bg-sky-500 text-black hover:text-white">
                        <CiHeart size={"2em"} /> Add To Whistlist
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProdukDetail;