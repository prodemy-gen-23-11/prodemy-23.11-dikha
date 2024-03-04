import React, { useEffect } from 'react';
import { RiEmotionHappyLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import ProductCart from '../components/ProductCart';
import { DECREMENT, INCREMENT } from '../data/library';
import { getDataCartFromApi, removeBarangById, setQuantityBarang } from '../store/reducers/cartSlice';


function dataCartIsNotExist() {
    return (
        <span className='grid place-content-center text-5xl'>
            Silakan Belanja Terlebih Dahulu <RiEmotionHappyLine />
        </span>
    )
}

export default function CartPage() {

    const dispatch = useDispatch();

    const { status, userCart } = useSelector((state) => state.cart);
    const userId = useSelector((state) => state.auth?.user.id);
    const dataCart = userCart;

    useEffect(() => {
        dispatch(getDataCartFromApi(userId));
    }, [])


    let totalPrice = 0;
    dataCart?.forEach(item => totalPrice += (item.harga * item.qty));

    function hapusDatacart(idItem) {
        const newDataCart = dataCart.filter((item) => item.id !== idItem);
        console.log(newDataCart)
        const sendData = {
            userId: userId,
            dataCart: newDataCart
        }
        dispatch(removeBarangById(sendData));
    }

    function handleQuantity(item, option) {

        const { id, stok, qty } = item;
        const sendData = {
            userId: userId,
            barang: {
                id: id,
                qty: qty,
                stok: stok,
                option: option
            },
            userCart
        }
        dispatch(setQuantityBarang(sendData));
    }

    return (
        <div className='min-h-[39rem] pt-10 px-[10rem]'>
            {
                dataCart.length == 0 ? dataCartIsNotExist() :
                    <div className=' relative flex'>
                        <div className='m-2 h-full w-4/6 flex'>
                            <div className=' w-full'>
                                {
                                    dataCart?.map((item) => (
                                        <div key={item.id}>
                                            <div className='relative grid place-items-center place-content-between m-2 border-2 border-red-500 rounded-2xl bg-slate-200'>
                                                <ProductCart id={item.id} title={item.nama} src={item.gambar[0]} harga={item.harga} qty={item.qty} />
                                                <div className='absolute bottom-1 right-1'>
                                                    <Button onClick={() => hapusDatacart(item.id)}>Hapus</Button>
                                                </div>
                                                <div className='absolute bottom-[0.75rem] left-[11rem]'>
                                                    <button className='border-2 rounded-lg bg-blue-300 w-7 text-xl hover:bg-blue-500' onClick={() => handleQuantity(item, INCREMENT)}>+</button>
                                                    <button className='border-2 rounded-lg bg-gray-300 w-7 text-xl hover:bg-gray-500' onClick={() => handleQuantity(item, DECREMENT)}>-</button>
                                                </div>
                                                <div className='absolute text-xl bottom-1 right-[15rem]'>
                                                    Harga:${(item.harga * item.qty)}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className=' absolute right-0 top-4 w-[30rem] h-[10rem] p-2 text-3xl bg-slate-200 rounded-xl'>
                            Total Harga: ${totalPrice}
                        </div>
                    </div>
            }
        </div>
    )
}
