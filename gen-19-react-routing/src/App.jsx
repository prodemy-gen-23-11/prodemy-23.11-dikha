import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50">
      <Header /> 
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App