import React from 'react'
import HorizontalRule from '../components/HorizontalRule'

function Footer() {
  return (
    <section>
      <HorizontalRule/>
      <div className='flex text-left place-content-around items-center w-full gap-5 pt-5'>
        <div className='flex-none min-w-[80rem]'>
          <h1 className='text-5xl font-bold'>
            Dapatkan Diskon 50% Untuk Semua Produk
          </h1>
          <p className='pt-5'>
            Dengan klaim, kamu mendapatkan diskon untuk satu produk untuk semua produk tersedia
          </p>
        </div>
        
        
        <div className='flex flex-row gap-x-10'>
          <div>
            <div className='font-bold'>
              Perusahaan Kami
            </div>
            <div className='text-zinc-400 flex flex-col'>
              <a href="#" className='hover:text-black'>Tentang Kami</a>
              <a href="#" className='hover:text-black'>Temukan Toko</a>
              <a href="#" className='hover:text-black'>Karir</a>
              <a href="#" className='hover:text-black'>Sejarah Kami</a>
            </div>
          </div>
          <div>
            <div className='font-bold'>
              Pilihan
            </div>
            <div className='text-zinc-400 flex flex-col'>
              <a href="#" className='hover:text-black'>Produk</a>
              <a href="#" className='hover:text-black'>Display</a>
              <a href="#" className='hover:text-black'>QNA</a>
            </div>
          </div>
          <div>
            <div className='font-bold'>
              Layanan Pelanggan
            </div>
            <div className='text-zinc-400 flex flex-col'>
              <a href="" className='hover:text-black'>Permasalahan</a>
              <a href="" className='hover:text-black'>Pergantian & Perbaikan</a>
              <a href="" className='hover:text-black'>Pelacakan Pengiriman</a>
              <a href="" className='hover:text-black'>Daftarkan Produkmu</a>
              <a href="" className='hover:text-black'>Kontak Kami</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer