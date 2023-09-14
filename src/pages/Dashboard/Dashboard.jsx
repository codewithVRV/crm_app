

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import useTickets from "../../hooks/useTickets";
import HomeLayout from "../../Layouts/HomeLayout";


function Dashboard () {
    
    const [ticketState] = useTickets()
    const [searchParam] = useSearchParams()

    useEffect (() => {
        console.log("search param is ", searchParam)
        console.log("Search param is", searchParam.get('status'))
    }) 
    return (
        <>  
            <HomeLayout></HomeLayout>
            
                <table className="table table-hover table-bordered text-center">
                <thead className="table-danger">
                    <tr>
                        <th scope="col">Ticket Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Descriptions</th>
                        <th scope="col">Reporter</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Asignee</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {ticketState && ticketState.ticketList.map((ticket) => {
                    return (
                        <tbody key={ticket._id}>
                            <tr>
                            <td scope="row">{ticket._id}</td>
                            <td>{ticket.title}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.assignee}</td>
                            <td>{ticket.ticketPriority}</td>
                            <td>{ticket.assignedTo}</td>
                            <td>{ticket.status}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
            {/* })} */}
        </>
    )
}

export default Dashboard;