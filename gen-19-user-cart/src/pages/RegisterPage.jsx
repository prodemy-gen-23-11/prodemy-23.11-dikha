
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { array, object, string } from 'yup';
import Button from '../components/Button';
import InputTextRegular from '../components/InputTextRegular';
import { axiosInstance } from '../data/axios';
import { ROLE_ADMIN, ROLE_CUSTOMER } from '../data/library';

export default function RegisterPage() {

    const schema = object({
        username: string().required("Username Tidak Terisi"),
        email: string().email().required("Email Tidak Terisi"),
        password: string().min(5).required("Password Tidak Terisi"),
        role: array().min(1).required("Role Harus Terisi minimai 1")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            role: [''],
        },
        resolver: yupResolver(schema)
    });

    const onSubmitForm = (data) => {
        axiosInstance.post("/register", data)
            .then((res) => {
                alert("Registrasi Bergasil");
                axiosInstance.post("/cart", {
                    id: res.data?.user?.id,
                    dataCart: []
                })
                reset();
            })
            .catch(() => alert("Terjadi Kesalahan"))
    }
    return (
        <div className='flex border-4 border-black m-5 place-content-center'>
            <div className='relative border-4 border-red-500 w-2/5 h-[30rem] rounded-xl p-2'>
                <h1 className='text-4xl font-bold flex place-content-center w-full'>Register Page</h1>
                <form onSubmit={handleSubmit(onSubmitForm)} className='w-2/3 mt-2 flex gap-y-2 flex-col text-xl relative'>
                    <div className='relative h-[5.2rem]'>
                        <span>Username:</span>
                        <InputTextRegular register={register("username")} placeholder={"username"} />
                        <span className='absolute bottom-0 left-0 text-sm text-red-500 w-full'>{errors.username?.message}</span>
                    </div>
                    <div className='relative h-[5.2rem]'>
                        <span>Email:</span>
                        <InputTextRegular register={register("email")} placeholder={"email"} type={"email"} />
                        <span className='absolute bottom-0 left-0 text-sm text-red-500 w-full'>{errors.email?.message}</span>
                    </div>
                    <div className='relative h-[5.2rem]'>
                        <span>Password:</span>
                        <InputTextRegular register={register("password")} placeholder={"password"} type={"password"} />
                        <span className='absolute bottom-0 left-0 text-sm text-red-500 w-full'>{errors.password?.message}</span>
                    </div>
                    <div className=' relative flex flex-row gap-x-10 h-[3.5rem]'>
                        <div>
                            <input type="checkbox" name={ROLE_CUSTOMER} value={ROLE_CUSTOMER} {...register("role")} defaultChecked />
                            <label className='ml-1' htmlFor={ROLE_CUSTOMER}>{ROLE_CUSTOMER}</label>
                        </div>
                        <div>
                            <input type="checkbox" name={ROLE_ADMIN} value={ROLE_ADMIN} {...register("role")} />
                            <label className='ml-1' htmlFor={ROLE_ADMIN}>{ROLE_ADMIN}</label>
                        </div>
                        <span className='absolute bottom-0 left-0 text-sm text-red-500 w-full'>{errors.role?.message}</span>
                    </div>
                    <div className='my-5 relative'>
                        <Button type={"submit"}>Submit</Button>
                        <Link to={"/login"} className='absolute bottom-0 right-0 text-lg text-blue-700'>Login Page</Link>
                    </div>
                </form>

                <div className='absolute bottom-1 right-1'>
                    <Link to={"/"}>
                        <Button>Go To Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
