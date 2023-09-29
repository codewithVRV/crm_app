import './CreateTicket.css'

import { useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import useTickets from '../../hooks/useTickets';
import { createTicket } from '../../Redux/Slices/TicketSlice';

function CreateTicket () {
    const auth = useSelector((state) => state.auth)
    const dispatcher = useDispatch()
    const navigator = useNavigate()
    useTickets()

    const [ticket, setTicket] = useState({
        title:  '',
        description: '',
        ticketPriority: 3,
        status: 'open',
        clientName: auth.data.clientName,
    })

    function handleFormChange (e) {
        const {name, value} = e.target;
        setTicket({
            ...ticket,
            [name]:value,
        })
    }

    async function onFormSubmit (e) {
        e.preventDefault();
        if(!ticket.title || !ticket.description) return toast.error("Title And Description are mandatory")
        const response = await dispatcher(createTicket(ticket))
        navigator('/')
        if(response?.payload?.status == 201){
            // ticket got created successfully
            setTicket({
                title:  '',
                description: '',
                ticketPriority: '',
                status: '',
                clientName: '',
            })
        }
    
    }

    // console.log("new ticket data is", ticket)

    return (
        
        <div className="form-wrapper">
            <h1>Create New Ticket</h1>
            <form onSubmit={onFormSubmit}> 
                <label htmlFor="" className='label1'>What is Your issue?</label> <br />
                <input type="text"  name='title' value={ticket.title} onChange={handleFormChange} placeholder='Type Here'/> <br />
                <label htmlFor="">Please Describe Your Issue</label> <br />
                <textarea name="description" value={ticket.description} onChange={handleFormChange} id="" cols="43" rows="5"></textarea> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
        
    )
}

export default CreateTicket;