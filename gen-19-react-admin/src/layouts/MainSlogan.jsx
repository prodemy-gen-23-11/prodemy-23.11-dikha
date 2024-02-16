import React from 'react'
import Button from '../components/Button'

function MainSlogan() {
  return (
    <div className="flex place-content-center items-center flex-col text-xl py-[30rem] text-stone-50 bg-[url('./assets/main.jpg')] bg-cover">
        <div>
            <h1 className='text-8xl'>Temukan Furniture Impianmu</h1>
        </div>
        <div className='pt-5 text-3xl text-center'>
            <p>Kami Menjual Apa Yang Tidak Kalian Butuhkan</p>
            <p>Harga Tinggi Prioritas Kami</p>
        </div>
        <div className='pt-2'>
            <Button>
                Belanja Sekarang
            </Button>
        </div>
    </div>
  )
}

export default MainSlogan