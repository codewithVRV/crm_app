import { useEffect, useState } from "react";
import { usePDF } from 'react-to-pdf';

import UserDetailsModal from "../../component/UserDetailsModal/UserDetailsModal";
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

        {/* UserDetailsModal */}

        <UserDetailsModal key={modalData.name} user={modalData} />

                        
        </>
    )
}

export default ListAllUsers;