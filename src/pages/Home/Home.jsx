import './Home.css'

import { Link } from "react-router-dom";

function Home () {
    return (
        <>
            <h1>This is home page</h1>
            <Link to={"/login"}>Go to Login Page</Link> <br /> <br />
            {/* <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
             </a> */}
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                 Open Side Bar
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
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary fixed-bottom login-btn">Login</button>
                        <button className="btn btn-primary fixed-bottom signup-btn">SignUp</button>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Home;