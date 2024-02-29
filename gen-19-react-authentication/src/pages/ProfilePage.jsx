
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfilePage() {

    const { user } = useSelector((state) => state.auth);

    return (
        <div className='p-10 w-full min-h-screen flex flex-col place-items-center border-4 border-black text-5xl'>
            <table className=' table-fixed border-4 border-black'>
                <tr className=' table-fixed border-4 border-black'>
                    <th className=' table-fixed border-4 border-black'>
                        Username
                    </th>
                    <td className=' table-fixed border-4 border-black'>
                        {user.username}
                    </td>
                </tr>
                <tr>
                    <th className=' table-fixed border-4 border-black'>
                        Email:
                    </th>
                    <td className=' table-fixed border-4 border-black'>
                        {user.email}
                    </td>
                </tr>
                <tr>
                    <th className=' table-fixed border-4 border-black'>
                        Role:
                    </th>
                    <td className=' table-fixed border-4 border-black'>
                        {user.role}
                    </td>
                </tr>
            </table>
        </div>
    )
}
