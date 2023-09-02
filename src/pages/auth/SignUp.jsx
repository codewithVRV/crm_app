function SignUp () {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 text-center mb-4 mt-5">
                        <h3>SignUp Here</h3>
                    </div>

                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="User Id.."/>
                    </div>
                    <div className="col-lg-7  mb-3">
                        <input type="text"  className="form-control" placeholder="Email.."/>
                    </div>
                    <div className="col-lg-7  mb-4">
                        <input type="text"  className="form-control" placeholder="Password.."/>
                    </div>
                    <div className="col-lg-7">
                        <div class="dropdown d-flex justify-content-end mb-2">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User Type
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Customer</a></li>
                            <li><a class="dropdown-item" href="#">Engineer</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 d-grid">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;