import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import AdminRoute from "./route/AdminRoute";
import CustomerRoute from "./route/CustomerRoute";
import HasAdminRole from "./route/HasAdminRole";
import HasLoggedIn from "./route/HasLoggedIn";


function App() {

    return (
        <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50 min-h-screen">
            <Routes>
                <Route path="/*" element={<CustomerRoute />} />
                <Route path="/createAccount" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route element={<HasLoggedIn />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<HasAdminRole />}>
                    <Route path="/admin/*" element={<AdminRoute />} />
                </Route>

            </Routes>
        </div>
    );
}



export default App;