import { Route,Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";


function MainRoutes () {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
        </Routes>
    )

}

export default MainRoutes;