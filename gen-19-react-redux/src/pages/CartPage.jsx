import React from 'react';
import { RiEmotionHappyLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import ProductCart from '../components/ProductCart';
import { editQuantityBarangFromCart, removeBarangFromCart } from '../store/actions/cartAction';



function dataCartIsNotExist() {
    return (
        <span className='grid place-content-center text-5xl h-[30rem]'>
            Silakan Belanja Terlebih Dahulu<RiEmotionHappyLine />
        </span>
    )
}

export default function CartPage() {

    const { dataCart } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    let totalPrice = 0;
    dataCart?.forEach(item => totalPrice += (item.harga * item.qty));

    function hapusDatacart(index) {
        dispatch(removeBarangFromCart(index));
    }

    function handleQuantity(index, count) {
        const sendData = {
            index: index,
            counter: count
        }
        dispatch(editQuantityBarangFromCart(sendData));
    }


    const isDataCartExist = ((dataCart == undefined) || (dataCart.length == 0));
    return (isDataCartExist ? dataCartIsNotExist() :
        <div className='my-10 mx-[10rem] min-h-[30rem] flex'>
            <div className='m-2 h-full w-4/6 flex'>
                <div className=' w-full'>
                    {
                        dataCart?.map((item, index) => (
                            <div key={item.id}>
                                <div className='relative grid place-items-center place-content-between m-2 border-2 border-red-500 rounded-2xl bg-slate-200'>
                                    <ProductCart id={item.id} title={item.nama} src={item.gambar[0]} harga={item.harga} qty={item.qty} />
                                    <div className='absolute bottom-1 right-1'>
                                        <Button onClick={() => hapusDatacart(index)}>Hapus</Button>
                                    </div>
                                    <div className='absolute bottom-[0.75rem] left-[11rem]'>
                                        <button className='border-2 rounded-lg bg-blue-300 w-7 text-xl hover:bg-blue-500' onClick={() => handleQuantity(index, +1)}>+</button>
                                        <button className='border-2 rounded-lg bg-gray-300 w-7 text-xl hover:bg-gray-500' onClick={() => handleQuantity(index, -1)}>-</button>
                                    </div>
                                    <div className='absolute text-xl bottom-1 right-[15rem]'>
                                        Harga Total:${(item.harga * item.qty)}
                                    </div>
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
