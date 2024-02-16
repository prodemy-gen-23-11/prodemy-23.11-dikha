import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Homepage from './Homepage'
import ProductPage from './ProductPage'

export default function CustomerPage() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/products/:id' element={<ProductPage />} />
            </Routes>
            <Footer />
        </div>
    )
}
