import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import { axiosInstance } from "../data/axios";
import checkAuthentications from "../route/checkAuthentications";
import Button from "./Button";


function ProdukDetail(props) {

    const { id } = props;
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data: mainData, isLoading } = useSWR(`http://localhost:3000/products/${id}`, fetcher);

    const dispatch = useDispatch();

    const { isRoleCustomer } = checkAuthentications();

    const [qty, setQty] = useState(1);

    const [image, setImage] = useState(mainData?.gambar[0]);
    function setMainImage(newImage) {
        setImage(newImage);
    }

    useEffect(() => {
        setImage(mainData?.gambar[0]);
    }, [mainData]);


    const handleClickAddToCart = () => {
        if (!isRoleCustomer) {
            alert("Role Anda Bukan Customer");
            return
        }
        const addBarang = { ...mainData, qty: qty };
        axiosInstance.post("/cart", addBarang)
            .then((res) => console.log(res.data))
            .catch(err => console.log(err))
        // dispatch(addBarangToCart(addBarang));
    }

    return isLoading ? (
        ""
    ) : (
        <div className="flex min-h-screen gap-x-5 flex-cols-2 px-48 py-32">
            <div className="w-3/5 flex flex-cols-2 gap-x-3">
                <div className="w-3/4">
                    <img
                        src={image}
                        alt=""
                        className="rounded-xl cursor-pointer"
                    />
                </div>
                <div className="w-1/4 grid gap-y-3">
                    {mainData?.gambar.map((g, index) => (
                        <img
                            key={index}
                            src={g}
                            alt=""
                            onClick={() => setMainImage(g)}
                            className="rounded-xl active:scale-95 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
            <div className="w-2/5 px-3">
                <div className="text-5xl">
                    {mainData?.nama}
                </div>
                <div className="py-10 px-3 text-right text-3xl">
                    ${mainData?.harga}
                </div>
                <div className="text-justify text-lg max-h-52">
                    {mainData?.deskripsi}
                </div>
                <div className=' flex place-items-center gap-x-3 mt-5'>
                    Quantity:
                    <div className="flex place-items-center gap-x-3 bg-slate-50">
                        <button className='border-2 rounded-lg bg-blue-300 w-7 text-xl hover:bg-blue-500' onClick={() => qty < mainData?.stok ? setQty(qty + 1) : qty}>+</button>
                        <div>{qty}</div>
                        <button className='border-2 rounded-lg bg-gray-300 w-7 text-xl hover:bg-gray-500' onClick={() => qty > 1 ? setQty(qty - 1) : qty}>-</button>
                    </div>
                    <div>
                        {
                            qty == mainData?.stok ? <div className="text-red-300 flex place-items-center gap-x-1"><FaRegFaceSadTear /> <span>Stok Terbatas</span></div> : ""
                        }
                    </div>
                </div>
                <div className="flex justify-evenly pt-[5rem]">
                    <Button onClick={() => handleClickAddToCart()} className=" bg-emerald-300 hover:bg-emerald-500 text-black hover:text-white">
                        <CiShoppingCart size={"2em"} /> Add To Cart
                    </Button>
                    <Button className="bg-sky-300 hover:bg-sky-500 text-black hover:text-white">
                        <CiHeart size={"2em"} /> Add To Whistlist
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProdukDetail;
