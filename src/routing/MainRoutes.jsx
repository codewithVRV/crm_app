import { Route,Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home/Home";


function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>

        </Routes>
    )

}

export default MainRoutes;