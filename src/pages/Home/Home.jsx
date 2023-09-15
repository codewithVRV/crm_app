import './Home.css'

import { ArcElement, Chart as ChartJS, Legend,Title,Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BsFillPencilFill} from 'react-icons/Bs'
import { TbProgressBolt} from 'react-icons/Tb'

import Card from '../../component/Card/Card';
import useTickets from '../../hooks/useTickets';
import HomeLayout from '../../Layouts/HomeLayout';

ChartJS.register(ArcElement, Legend, Title, Tooltip);

function Home () {

    
    const [ticketsState] = useTickets();
    // console.log("ticket state is", ticketsState)

    const pieChartData = {
        labels: Object.keys(ticketsState.ticketDistribution),
        fontColor: "white",
        datasets : [
            {
                lable : "Ticket Distribution",
                data: Object.values(ticketsState.ticketDistribution),
                backgroundColor: ["yellow", "red", "green", "blue", "purple", ],
                borderColor: ["yellow", "red", "green", "blue", "purple",],
                borderWidth: 1,
            }
        ]
    }

    return (
        <>
        <HomeLayout>
           
          
            <div className='d-flex justify-content-center flex-wrap'>
                <Card quantity={ticketsState.ticketDistribution.open} titleText={'Open'}>
                    <BsFillPencilFill />  
                </Card>

                <Card titleText={'In Progress'} quantity={ticketsState.ticketDistribution.inProgress}>
                    <TbProgressBolt />  
                </Card>

                <Card titleText={'Resolved'} quantity={ticketsState.ticketDistribution.resolved}>
                    <TbProgressBolt />  
                </Card>

                <Card titleText={'On Hold'} quantity={ticketsState.ticketDistribution.onHold}>
                    <BsFillPencilFill />  
                </Card>

                <Card titleText={'Canceled'} quantity={ticketsState.ticketDistribution.canceled}>
                    <BsFillPencilFill />  
                </Card>
               
                
            </div>

            

        </HomeLayout>
        <div className='pie-chart-data'>
            <Pie data={pieChartData}/>
        </div>

        
        </>
    )
}

export default Home;