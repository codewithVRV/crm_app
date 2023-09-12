import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllTicketsforTheUser } from '../Redux/Slices/TicketSlice';



function useTickets () {
    const authState = useSelector((state) => state.auth);
    const ticketsState = useSelector((state) => state.tickets)
    

    const dispatch = useDispatch();
    

    async function loadTickets () {
        await dispatch(getAllTicketsforTheUser());
    }
    

    useEffect(() => {

        loadTickets()

    }, [authState.token])

    return [ticketsState];
}

export default useTickets;