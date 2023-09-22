import { useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";



function UserDetailsModal ({user}) {

    const [modalData, setModalData] = useState(user)

    
    async function onStatusHandel (e) {
        try{
        const response = await axiosInstance.patch('user/updateUser', {
            userId: modalData.id,
            updates: {
                ...modalData, 
                userStatus: e.target.textContent,
            }
        }, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        if(response?.data?.result) {
            toast.success("User Update Successfully")
            const user = response?.data?.result

            setModalData({
                name: user.name,
                email: user.email,
                userStatus: user.userStatus,
                userType: user.userType,
                clientName: user.clientName,
                id: user._id,
            })
        }
        }
        catch (error) {
           toast.error("Something Went Wrong!") 
        }
        
        
    }

    

    return (
        <>
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
                        <p className="d-flex"> User Status:-  

                             <b className="ms-5">
                                {/*  */}
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {modalData.userStatus}
                                    </button>
                                        <ul className="dropdown-menu" onClick={onStatusHandel}>
                                            <li><a className="dropdown-item" href="#">approved</a></li>
                                            <li><a className="dropdown-item" href="#">suspended</a></li>
                                            <li><a className="dropdown-item" href="#">rejected</a></li>
                                        </ul>
                                    </div>
                             </b>
                             
                        </p>
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

export default UserDetailsModal;