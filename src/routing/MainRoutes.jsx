import { Route,Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import AuthRoutes from "./AuthRoutes";


function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route  element={<AuthRoutes allowListedRoles={["engineer", "customer"]}/>}>  
                <Route path='/resolve' element={<div>Testing Purpose only</div>}/>
            </Route>
            <Route path="/dashboard" element={<Dashboard />}/>

        </Routes>
    )

}

export default MainRoutes;