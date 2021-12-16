import React from "react"
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

// AuthServices
import { AuthProvider, useAuth } from "./components/Core/auth";
// import RequireAuth from "./components/Core/ProtectedRoute";
// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard"
import NotFoundPage from "./components/shared/notfound/notfound"



function Router() {
    function RequireAuth({ children }) {
        const { authed } = useAuth();
        console.log("🚀 ~ file: ProtectedRoute.jsx ~ line 7 ~ RequireAuth ~ authed", authed)
        return authed === true ? children : <Navigate to="/login" replace />;
    }
 return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/login" element={<Login />}/>
                <Route path='/dashboard' element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }/>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
 )
}
export default Router