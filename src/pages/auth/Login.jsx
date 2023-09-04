
import { useState } from 'react';
import { useDispatch } from 'react-redux'

import {login} from '../../Redux/Slices/AuthSlice'


function Login () {

    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })



    function onSubmit () {
        if(!loginDetails.email || !loginDetails.password) return;
        dispatch(login(loginDetails))
        console.log("login details", loginDetails)
    }

    function handleInputChange (e) {
        const {name, value} = e.target;
        // console.log(name, value)
        setLoginDetails({...loginDetails, [name]: value})
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 text-center mb-4 mt-5">
                        <h3>Login Here</h3>
                    </div>

                    <div className="col-lg-7  mb-3">
                        <input type="text" 
                         className="form-control" 
                         placeholder="Email.."
                         onChange={handleInputChange}
                         name='email'
                         
                         />
                    </div>
                    <div className="col-lg-7  mb-4">
                        <input type="text"  
                        className="form-control" 
                        placeholder="Password.."
                        onChange={handleInputChange}
                        name='password'
                        />
                    </div>

                    <div className="col-lg-7 d-grid">
                        <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;