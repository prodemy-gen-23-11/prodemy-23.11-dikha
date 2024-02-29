
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputTextRegular from '../components/InputTextRegular';
import { setToken, setUser } from '../store/reducers/authSlice';

export default function LoginPage() {

    const { register, handleSubmit } = useForm();

    // useEffect(() => {
    //     alert("Pertama Kali Dirender!");
    // }, [])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitForm = (data) => {
        axios.post("http://localhost:3000/login", data)
            .then((res) => {
                const { accessToken, user } = res.data;
                dispatch(setToken(accessToken));
                dispatch(setUser(user));
                navigate("/");
            })
            .catch((err) => alert(err.response.data))
    }
    return (
        <div className='flex border-4 border-black m-5 place-content-center'>
            <div className='relative border-4 border-red-500 w-2/5 h-[30rem] rounded-xl p-2'>
                <h1 className='text-4xl font-bold flex place-content-center w-full'>Login Page</h1>
                <form onSubmit={handleSubmit(onSubmitForm)} className='w-2/3 mt-2 flex gap-y-2 flex-col text-xl relative'>
                    <div >
                        <span>Email:</span>
                        <InputTextRegular register={register("email")} placeholder={"email"} type={"email"} />
                    </div>
                    <div >
                        <span>Password:</span>
                        <InputTextRegular register={register("password")} placeholder={"password"} type={"password"} />
                    </div>
                    <Button type={"submit"}>Login</Button>
                    <Link to={"/createAccount"} className='absolute bottom-0 right-0 text-sm text-blue-700'>Belum Punya Akun?</Link>
                </form>

                <div className='absolute bottom-1 left-1'>
                    <Link to={"/"}>
                        <Button>Go To Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
