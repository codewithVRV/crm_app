import './Home.css'

import { useEffect } from 'react';
import { BsFillPencilFill} from 'react-icons/Bs'
import { TbProgressBolt} from 'react-icons/Tb'
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../component/Card/Card';
import HomeLayout from '../../Layouts/HomeLayout';
import { getAllTicketsforTheUser } from '../../Redux/Slices/TicketSlice';



function Home () {

    const authState = useSelector((state) => state.auth);
    const ticketsState = useSelector((state) => state.tickets)

    const dispatch = useDispatch();
    

    async function loadTickets () {
        const response = await dispatch(getAllTicketsforTheUser());
        console.log(response)
    }
    

    useEffect(() => {

        loadTickets()

    }, [authState.token])



    return (
        <HomeLayout>
           
          
            <div className='d-flex justify-content-center flex-wrap'>
                <Card quantity={ticketsState.ticketDistribution.open} titleText={'Open'}>
                    <BsFillPencilFill />  
                </Card>

                <Card titleText={'inProgress'} quantity={ticketsState.ticketDistribution.inProgress}>
                    <TbProgressBolt />  
                </Card>

                <Card titleText={'Resolved'} quantity={ticketsState.ticketDistribution.resolved}>
                    <TbProgressBolt />  
                </Card>

                <Card titleText={'onHold'} quantity={ticketsState.ticketDistribution.onHold}>
                    <BsFillPencilFill />  
                </Card>

                <Card titleText={'Canceled'} quantity={ticketsState.ticketDistribution.canceled}>
                    <BsFillPencilFill />  
                </Card>
               
                
            </div>

            

        </HomeLayout>
    )
}

export default Home;