import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import AllProducts from "../pages/AllProducts";
import CartPage from "../pages/CartPage";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import Auth from "./Auth";
import checkAuthentications from "./checkAuthentications";

export default function CustomerRoute() {

    const { hasLogin, isRoleCustomer } = checkAuthentications();
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route element={<Auth hasLogin={hasLogin} isRoleCustomer={isRoleCustomer} />} >
                    <Route path="/cart" element={<CartPage />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}
