import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilPage from "./pages/ProfilPage";
import RegisterPage from "./pages/RegisterPage";
import AdminRoute from "./route/AdminRoute";
import Auth from "./route/Auth";
import CustomerRoute from "./route/CustomerRoute";
import checkAuthentications from "./route/checkAuthentications";


function App() {

    const { hasLogin, hasNotLogin, isRoleAdmin } = checkAuthentications();

    // const dispatch = useDispatch();
    // dispatch(setLastUrl(SetLocation()));

    return (
        <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50 min-h-screen">
            <Routes>
                <Route path="/*" element={<CustomerRoute />} />
                <Route path="/createAccount" element={<RegisterPage />} />

                <Route element={<Auth hasLogin={hasLogin} />}>
                    <Route path="/profil" element={<ProfilPage />} />
                </Route>
                <Route element={<Auth hasNotLogin={hasNotLogin} />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<Auth hasLogin={hasLogin} isRoleAdmin={isRoleAdmin} />}>
                    <Route path="/admin/*" element={<AdminRoute />} />
                </Route>

            </Routes>
        </div>
    );
}



export default App;