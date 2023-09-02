function Login () {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 text-center mb-4 mt-5">
                        <h3>Login Here</h3>
                    </div>

                    <div className="col-lg-7  mb-4">
                        <input type="text"  className="form-control" placeholder="User Id.."/>
                    </div>
                    <div className="col-lg-7  mb-4">
                        <input type="text"  className="form-control" placeholder="Password.."/>
                    </div>

                    <div className="col-lg-7 d-grid">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;