import { useEffect, useState } from "react";
import { usePDF } from 'react-to-pdf';

import axiosInstance from "../../config/axiosInstance";
import HomeLayout from "../../Layouts/HomeLayout";
// import Dashboard from "../Dashboard/Dashboard";

function ListAllUsers () {
    const [userList, setUserList] = useState([])
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});


    async function loadusers() {
        let response = await axiosInstance.get('/users', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        console.log("response of user is", response)
        setUserList(response?.data?.result)
    }
    console.log("userlist", userList)


    useEffect(() => {
        loadusers()
    }, [])
    return (
        <>
            <HomeLayout>
                    {/* <Dashboard /> */}
                    
            </HomeLayout>
            <div className="container">
                    <div className="row d-flex justify-content-center py-3">
                        <div className="col-6 py-3"><h2 className='text-end'>All Tickets Record</h2></div>
                        <div className="col-3 py-3"><button className='btn btn-primary mt-1' onClick={() => toPDF()}>Export to Pdf</button></div>
                    </div>
                </div>
            <div ref={targetRef}>
                    <table className="table table-hover table-bordered text-center">
                        <thead className="table-danger">
                            <tr>
                                <th scope="col">Ticket Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
                        {userList && userList.map((ticket) => {
                            return (
                                <tbody key={ticket._id}>
                                    <tr  data-toggle="modal" data-target="#myModal">
                                        <td>{ticket._id}</td>
                                        <td>{ticket.name}</td>
                                        <td>{ticket.email}</td>
                                        <td>{ticket.userStatus}</td>
                                        <td>{ticket.userType}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
            </div>

            {/* <!-- Modal --> */}
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">User Details</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        {/* <!-- Content for the modal goes here --> */}
                        <p>Item details will appear here.</p>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
                
                
            </div>
        </div>

                        
        </>
    )
}

export default ListAllUsers;