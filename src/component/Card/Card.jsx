import './Card.css'



function Card ({ children, titleText = "Default", quantity= "0" }) {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-4">
                            <div className='card-wrapper'>
                                <div className='card-upper-part d-flex justify-content-center align-items-center mt-3 gap-3'>
                                    {children}
                                    <h3>{titleText}</h3>
                                </div>  
                                <div className="card-lower-part d-flex justify-content-center mt-3">
                                    <h1>{quantity}</h1>
                                </div>
                            </div>
                            {/* <div className='card-wrapper'>
                                <div className='card-upper-part d-flex justify-content-center align-items-center mt-3 gap-3'>
                                    <BsFillPencilFill />
                                    <h3>Progress</h3>
                                </div>  
                                <div className="card-lower-part d-flex justify-content-center mt-3">
                                    <h1>0</h1>
                                </div>
                            </div>
                            <div className='card-wrapper'>
                                <div className='card-upper-part d-flex justify-content-center align-items-center mt-3 gap-3'>
                                    <BsFillPencilFill />
                                    <h3>Closed</h3>
                                </div>  
                                <div className="card-lower-part d-flex justify-content-center mt-3">
                                    <h1>0</h1>
                                </div>
                            </div>
                            <div className='card-wrapper'>
                                <div className='card-upper-part d-flex justify-content-center align-items-center mt-3 gap-3'>
                                    <BsFillPencilFill />
                                    <h3>Blocked</h3>
                                </div>  
                                <div className="card-lower-part d-flex justify-content-center mt-3">
                                    <h1>0</h1>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Card;