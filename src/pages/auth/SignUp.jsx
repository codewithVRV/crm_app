function SignUp () {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 text-center mb-4 mt-5">
                        <h3>SignUp Here</h3>
                    </div>

                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="User Name.."/>
                    </div>
                    
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="Email.."/>
                    </div>
                    <div className="col-lg-7  mb-4">
                        <input type="text"  className="form-control" placeholder="Password.."/>
                    </div>
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="Client Name.."/>
                    </div>
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="User Type.."/>
                    </div>
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="User Staus.."/>
                    </div>

                    <div className="col-lg-7">
                        <div className="dropdown d-flex justify-content-end mb-2">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User Type
                        </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Customer</a></li>
                            <li><a className="dropdown-item" href="#">Engineer</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 d-grid">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;