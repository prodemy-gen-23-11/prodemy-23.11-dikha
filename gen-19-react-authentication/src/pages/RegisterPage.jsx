
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import InputTextRegular from '../components/InputTextRegular';
import { ROLE_ADMIN, ROLE_CUSTOMER } from '../lib/library';

export default function RegisterPage() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            role: [''],
        }
    });

    const onSubmitForm = (data) => {
        axios.post("http://localhost:3000/register", data)
            .then(() => alert("Registrasi Bergasil"))
            .catch(() => alert("Terjadi Kesalahan"))
    }
    return (
        <div className='flex border-4 border-black m-5 place-content-center'>
            <div className='relative border-4 border-red-500 w-2/5 h-[30rem] rounded-xl p-2'>
                <h1 className='text-4xl font-bold flex place-content-center w-full'>Register Page</h1>
                <form onSubmit={handleSubmit(onSubmitForm)} className='w-2/3 mt-2 flex gap-y-2 flex-col text-xl relative'>
                    <div >
                        <span>Username:</span>
                        <InputTextRegular register={register("username")} placeholder={"username"} />
                    </div>
                    <div >
                        <span>Email:</span>
                        <InputTextRegular register={register("email")} placeholder={"email"} type={"email"} />
                    </div>
                    <div >
                        <span>Password:</span>
                        <InputTextRegular register={register("password")} placeholder={"password"} type={"password"} />
                    </div>
                    <div className='flex flex-row gap-x-3'>
                        <div className='flex gap-x-1'>
                            <input type="checkbox" name={ROLE_CUSTOMER} value={ROLE_CUSTOMER} {...register("role")} defaultChecked />
                            {ROLE_CUSTOMER}
                        </div>
                        <div className=' flex gap-x-1'>
                            <input type="checkbox" name={ROLE_ADMIN} value={ROLE_ADMIN} {...register("role")} />
                            {ROLE_ADMIN}
                        </div>
                    </div>
                    <Button type={"submit"}>Submit</Button>
                    <Link to={"/login"} className='absolute bottom-0 right-0 text-sm text-blue-700'>Login Page</Link>
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
