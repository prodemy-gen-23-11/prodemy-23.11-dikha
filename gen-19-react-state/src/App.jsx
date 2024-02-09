import React from 'react';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import ProductPage from './pages/ProductPage';
//import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50">
      <Header /> 
      {/* <Homepage /> */}
      {<ProductPage />}
      <Footer />
    </div>
  )
}

export default App