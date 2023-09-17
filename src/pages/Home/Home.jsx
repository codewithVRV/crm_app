import './Home.css'

import { ArcElement, BarElement, CategoryScale, Chart as ChartJS,
 Legend, LinearScale, LineElement, PointElement, Title,Tooltip,} from "chart.js";
import { useEffect, useState } from 'react';
import { Line, Pie  } from "react-chartjs-2";
import { BsFillPencilFill} from 'react-icons/Bs'
import { TbProgressBolt} from 'react-icons/Tb'

import Card from '../../component/Card/Card';
import useTickets from '../../hooks/useTickets';
import HomeLayout from '../../Layouts/HomeLayout';

ChartJS.register(ArcElement, Legend, Title, Tooltip,
     BarElement,CategoryScale, LinearScale, Tooltip, Legend, LineElement,PointElement );

function Home () {

    
    const [ticketsState] = useTickets();
    const [openTickets, setOpenTickets] = useState({});
    // console.log("ticket state is", ticketsState)

    const pieChartData = {
        labels: Object.keys(ticketsState.ticketDistribution),
        fontColor: "white",
        datasets : [
            {
                lable : "Ticket Distribution",
                data: Object.values(ticketsState.ticketDistribution),
                backgroundColor: ["yellow", "red", "green", "blue", "purple", ],
                borderColor: ["black", "white", "black", "white", "black",],
                borderWidth: 3,
            }
        ]
    }
    const lineChartData = {
        labels: Object.keys(openTickets),
        fontColor: "white",
        datasets: [
          {
            label: 'Open Tickets',
            data: Object.values(openTickets),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
        ],
      };

    // const barChartData = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //     datasets: [
    //         {
    //             lable: 'Open',
    //             data: [3, 6, 9, 5, 4, 7],
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             borderColor: 'black',
    //             borderWidth: 1,
    //         },
    //         {
    //             lable: 'In Progress',
    //             data: [3, 3, 3, 7, 4, 2],
    //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //             borderColor: 'black',
    //             borderWidth: 1,
    //         },
    //         {
    //             lable: 'Resolved',
    //             data: [3, 3, 3, 7, 4, 2],
    //             backgroundColor: 'rgba(153, 122, 165, 0.5)',
    //             borderColor: 'black',
    //             borderWidth: 1,
    //         }

    //     ]
    // }

    useEffect(() => {
        if(ticketsState.ticketList.length > 0) {
            let opentTicketsData = {};
            ticketsState.ticketList.forEach((ticket) => {
                let date = ticket.createdAt.split("T")[0];
                if(ticket.status == 'open'){
                   opentTicketsData[date] = (!opentTicketsData[date]) ? 1 : opentTicketsData[date] + 1;
                }
            })
            setOpenTickets(opentTicketsData)
        }

    }, [ticketsState.ticketList])
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

        <div className="line-chart-data"> 
            <Line 
                data={lineChartData}
            />

        </div>

        {/* <div>
            <Bar 
                data={barChartData}
            />
        </div> */}
        </>
    )
}

export default Home;