import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { updateTicket } from "../../Redux/Slices/TicketSlice";


function TicketDetailsModal ({ticket}) {

    const [currentTicket, setCurrentTicket] = useState(ticket)
    const dispatcher = useDispatch()


    // useEffect(() => {
    //     console.log("currentTicket is", currentTicket)
    // }, [])
    console.log("sending the current ticket object", currentTicket)

   function handleTicketChange (e) {
        const { name, value } = e.target;
        // console.log("value is", e.target)
        setCurrentTicket({
            ...currentTicket, 
            [name] : value,
        })
   }

   async function handleTicketchange() {
       const response = await dispatcher(updateTicket(currentTicket))
       console.log(response)
   }

  


    return (
        <>
                    
                        {/* <!-- Modal --> */}
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">{currentTicket.title}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="modal-body">


                        {/* <!-- Content for the modal goes here --> */}
                        <p> Description:-     
                        <div className="form-floating">
                            <textarea className="form-control"
                                name="description"
                                value={currentTicket.description} 
                                onChange={handleTicketChange}
                                id="floatingTextarea"></textarea>


                            {/* <label htmlFor="floatingTextarea">Comment</label> */}
                            </div>
                        </p>
                        <p className="d-flex"> Ticket Priority:- 

                             <b className="ms-5">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                        
                                        {/* <select className="p-1 ms-2" name="ticketPriority" onChange={handleTicketChange}>
                                            <option selected={currentTicket.ticketPriority == 1} value="1">1</option>
                                            <option selected={currentTicket.ticketPriority == 2} value="2">2</option>
                                            <option selected={currentTicket.ticketPriority == 3} value="3">3</option>
                                            <option selected={currentTicket.ticketPriority >= 4} value="4">4</option>
                                        </select> */}

<select name="ticketPriority" className="p-1 mx-2 bg-white text-black" onChange={handleTicketChange}>
                        <option value="1" selected={currentTicket.ticketPriority == 1}>1</option>
                        <option value="2" selected={currentTicket.ticketPriority == 2}>2</option>
                        <option value="3" selected={currentTicket.ticketPriority == 3}>3</option>
                        <option value="4" selected={currentTicket.ticketPriority >= 4}>4</option>

                    </select>

                                    </div>
                             </b>
                             
                        </p>
                        <p className="d-flex"> Ticket status:-    

                            <b className="ms-5">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                        
                                        <select className="p-1 ms-2" name="status" onChange={handleTicketChange}>
                                            <option selected={currentTicket.status == "open"}        value="open">open</option>
                                            <option selected={currentTicket.status == "inProgress"}  value="inProgress">inProgress</option>
                                            <option selected={currentTicket.status == "onHold"}      value="onHold">onHold</option>
                                            <option selected={currentTicket.status == "resolved"}    value="resolved">resolved</option>
                                            <option selected={currentTicket.status == "canceled"}    value="canceled">canceled</option>
                                        </select>
                                    </div>
                             </b>
                            
                        </p>
                        
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" 
                         onClick={handleTicketchange}
                         className="btn btn-primary"
                          data-dismiss="modal">Save changes</button>
                    </div>
                </div>   
            </div>
        </div>
        </>
    )
}

export default TicketDetailsModal;