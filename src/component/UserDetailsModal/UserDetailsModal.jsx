function UserDetailsModal ({modalData}) {
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

export default UserDetailsModal;