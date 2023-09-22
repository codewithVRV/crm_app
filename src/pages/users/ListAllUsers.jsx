import { useEffect, useState } from "react";
import { usePDF } from 'react-to-pdf';

import axiosInstance from "../../config/axiosInstance";
import HomeLayout from "../../Layouts/HomeLayout";

function ListAllUsers () {
    const [userList, setUserList] = useState([])
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const [modalData, setModalData] = useState({
        name: '',
        email: '',
        userStatus: '',
        userType: '',
        clientName: '',
        id: '',
    })


    async function loadusers() {
        let response = await axiosInstance.get('/users', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        setUserList(response?.data?.result)
    }

    useEffect(() => {
        loadusers()
    }, [])
    return (
        <>
            <HomeLayout />
              
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
                        {userList && userList.map((user) => {
                            return (
                                <tbody key={user._id}>
                                    <tr onClick={() => {
                                        setModalData({
                                            name: user.name,
                                            email: user.email,
                                            userStatus: user.userStatus,
                                            userType: user.userType,
                                            clientName: user.clientName,
                                            id: user._id,
                                        })
                                    }}  data-toggle="modal" data-target="#myModal">
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.userStatus}</td>
                                        <td>{user.userType}</td>
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
                        <p> User Name:-     <b className="ms-5">{modalData.name}</b></p>
                        <p> User Email:-    <b className="ms-5">{modalData.email}</b></p>
                        <p> User Id:-       <b className="ms-5">{modalData.id}</b></p>
                        <p> User Status:-   <b className="ms-5">{modalData.userStatus}</b></p>
                        <p> User Type:-     <b className="ms-5">{modalData.userType}</b></p>
                        <p> Client Name:-   <b className="ms-5">{modalData.clientName}</b></p>
                        
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