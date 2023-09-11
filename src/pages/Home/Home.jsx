import './Home.css'

import { useEffect } from 'react';
// import{AiOutlineCloseCircle} from 'react-icons/Ai'
import { BsFillPencilFill} from 'react-icons/Bs'
import { TbProgressBolt} from 'react-icons/Tb'
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../component/Card/Card';
import HomeLayout from '../../Layouts/HomeLayout';
import { getAllTicketsforTheUser } from '../../Redux/Slices/TicketSlice';


function Home () {

    const authState = useSelector((state) => state.auth);
    // const ticketsState = useSelector((state) => state.tickets)

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
           
            {/* <h1>Children</h1> */}
            {/* <Card */}
            <div className='d-flex justify-content-center flex-wrap'>
                <Card>
                    <BsFillPencilFill />  
                </Card>

                <Card>
                    <TbProgressBolt />  
                </Card>

                <Card>
                    <BsFillPencilFill />  
                </Card>

                <Card quantity={30}>
                    <BsFillPencilFill />  
                </Card>
                <Card quantity={30}>
                    <BsFillPencilFill />  
                </Card>
                <Card quantity={30}>
                    <BsFillPencilFill />  
                </Card>
            </div>

            

        </HomeLayout>
    )
}

export default Home;