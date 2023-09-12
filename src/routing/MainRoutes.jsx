import { Route,Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";


function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/dashboard" element={<Dashboard />}/>

        </Routes>
    )

}

export default MainRoutes;