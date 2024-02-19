import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "../administrator/AddProducts";
import Admin from "../administrator/Admin";
import DeleteProducts from "../administrator/DeleteProducts";
import UpdateProducts from "../administrator/UpdateProducts";

export default function AdminRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route
                    path="/addProducts"
                    element={<AddProducts />}
                />
                <Route
                    path="/updateProducts/:id"
                    element={<UpdateProducts />}
                />
                <Route
                    path="/deleteProducts/:id"
                    element={<DeleteProducts />}
                />
            </Routes>
        </div>
    );
}
