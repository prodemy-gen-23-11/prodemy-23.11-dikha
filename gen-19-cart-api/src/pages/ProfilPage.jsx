
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfilPage() {

    const { user } = useSelector((state) => state.auth);

    return (
        <div className='p-10 w-full min-h-screen flex flex-col place-items-center border-4 border-black text-5xl'>
            <div>
                {user.username}
            </div>
            <div>
                {user.email}
            </div>
            <div>
                {user.role}
            </div>
        </div>
    )
}
