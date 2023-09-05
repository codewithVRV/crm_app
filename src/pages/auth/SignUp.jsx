import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {signup} from '../../Redux/Slices/AuthSlice'

function SignUp () {

    const navigator = useNavigate()
    const dispatch = useDispatch()
    const [signupDetails, setSignupDetails] = useState({

        name: "",
        email: "",
        password: "",
        userType: "",
        userStatus: "",
        clientName: "",
    })

    function handleInputChange (e) {
        const {name, value} = e.target;
        setSignupDetails({...signupDetails, [name] : value})
        // console.log("signup details", signupDetails)
    }


    function handleUserType (e) {
        // console.log(e.target.textContent)
        
        const userTypeSelected = e.target.textContent;
        setSignupDetails({
            ...signupDetails, 
            userType: userTypeSelected,
            userStatus: (userTypeSelected === "customer") ? "approved" : "suspended"
        });
    }
    function resetSignupState () {
        setSignupDetails({
            name: "",
            email: "",
            password: "",
            userType: "",
            userStatus: "",
            clientName: "",
        })
    }


    async function onSubmit () {
        // console.log("onSubmit called")
        if(!signupDetails.email ||
           !signupDetails.password ||
           !signupDetails.name ||
           !signupDetails.userStatus ||
           !signupDetails.userType ||
           !signupDetails.clientName) return;
           const response = await dispatch(signup(signupDetails))
           console.log("response is ",response)
           if (response.payload) navigator('/login')
           else resetSignupState()
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 text-center mb-4 mt-5">
                        <h3>SignUp Here</h3>
                    </div>

                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="User Name.."
                               onChange={handleInputChange}
                               name="name"
                               value={signupDetails.name}
                        />
                    </div>
                    
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="Email.."
                               name="email"
                               onChange={handleInputChange}
                               value={signupDetails.email}
                        />
                    </div>
                    <div className="col-lg-7  mb-4">
                        <input type="text"  className="form-control" placeholder="Password.."
                               name="password"
                               onChange={handleInputChange}
                               value={signupDetails.password}
                        />
                    </div>
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="Client Name.."
                                name="clientName"
                                value={setSignupDetails.clientName}
                                onChange={handleInputChange}
                        />
                    </div>
                    
                    
                    

                    {/* <div className="col-lg-7">
                        <div className="dropdown d-flex justify-content-end mb-2">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User Status
                        </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">approved</a></li>
                            <li><a className="dropdown-item" href="#">suspended</a></li>
                            <li><a className="dropdown-item" href="#">rejected</a></li>
                        </ul>
                        </div>
                    </div> */}

                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control"
                         value={signupDetails.userType} 
                         name="userType"
                         onChange={handleInputChange}
                         placeholder="User Type.."  disabled/>
                    </div>

                    <div className="col-lg-7">
                        <div className="dropdown d-flex justify-content-end mb-2">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {(!signupDetails.userType) ? "User Type" : signupDetails.userType}
                        </a>

                        <ul className="dropdown-menu" onClick={handleUserType}>
                            <li><a className="dropdown-item" href="#">customer</a></li>
                            <li><a className="dropdown-item" href="#">engineer</a></li>
                            <li><a className="dropdown-item" href="#">admin</a></li>
                        </ul>
                        </div>
                    </div>

                    

                    <div className="col-lg-7 d-grid">
                        <button className="btn btn-success" onClick={onSubmit}>Submit</button>
                    </div>
                    <div className="col-lg-7 d-grid mt-2">
                    <button className="btn btn-primary" >Already have an account <Link to={'/login'} className=" text-white mx-2">Login here.</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;