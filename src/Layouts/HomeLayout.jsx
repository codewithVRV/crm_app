
import { AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";

function HomeLayout ( {children}) {
    return (
        <>
            
            <div className="d-flex justify-content-start">

                <div>

                
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
                        <h3 className="mb-3 text-center">View All Tickes</h3>
                        <h4 className="text-center">Dashboard</h4>
                        </div>
                        
                        <div className="d-flex justify-content-around mt-5">
                            <button className="btn btn-primary" >Login</button>
                            <button className="btn btn-secondary" >SignUp</button>
                        </div>
                    </div>
                </div>

                </div>

                    <div className="mx-5 px-5 mt-2">
                        {children}  
                    </div>
                    
                </div>
            </>
    )
}

export default HomeLayout;