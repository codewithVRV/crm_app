import './Home.css'

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home () {
    return (
        <>
            <h1>This is home page</h1>
            <Link to={"/login"}>Go to Login Page</Link> <br /> <br />
            
                <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                 <AiOutlineMenu />
                </button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashboard</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                    {/* Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. */}
                    <h3 className="mb-3 text-center">View All Tickes</h3>
                    <h4 className="text-center">Dashboard</h4>
                    </div>
                    {/* <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div> */}
                    <div className="d-flex justify-content-around mt-5">
                        <button className="btn btn-primary" >Login</button>
                        <button className="btn btn-secondary" >SignUp</button>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Home;