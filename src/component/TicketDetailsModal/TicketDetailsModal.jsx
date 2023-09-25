

function TicketDetailsModal ({ticket}) {

   
    return (
        <>
                    
                        {/* <!-- Modal --> */}
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">{ticket.title}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        {/* <!-- Content for the modal goes here --> */}
                        <p> Description:-     
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" value={ticket.description} id="floatingTextarea"></textarea>
                            {/* <label htmlFor="floatingTextarea">Comment</label> */}
                            </div>
                        </p>
                        <p className="d-flex"> Ticket Priority:- 

                             <b className="ms-5">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                        
                                        <select className="p-1 ms-2">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                             </b>
                             
                        </p>
                        <p className="d-flex"> Ticket status:-    

                            <b className="ms-5">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                        
                                        <select className="p-1 ms-2">
                                            <option value="open">open</option>
                                            <option value="inProgress">inProgress</option>
                                            <option value="onHold">onHold</option>
                                            <option value="resolved">resolved</option>
                                            <option value="canceled">canceled</option>
                                        </select>
                                    </div>
                             </b>
                            
                        </p>
                        
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button"  className="btn btn-primary" data-dismiss="modal">Save changes</button>
                    </div>
                </div>   
            </div>
        </div>
        </>
    )
}

export default TicketDetailsModal;