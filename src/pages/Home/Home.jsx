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
    const [ticketCharData, setTicketChartData] = useState({
        openTickets: [],
        inProgressTickets: [],
        resolveTicketts: [],
    })
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
        labels: Object.keys(ticketCharData.openTickets),
        fontColor: "white",
        datasets: [
          {
            label: 'Open Tickets',
            data: Object.values(ticketCharData.openTickets),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'InProgress Tickets',
            data: Object.values(ticketCharData.inProgressTickets),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Resolve Tickets',
            data: Object.values(ticketCharData.resolveTicketts),
            borderColor: 'rgb(153, 212, 75)',
            backgroundColor: 'rgba(153, 212, 75, 0.5)',
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

    function processOpenTickets () {
        // Fetch the current date
        const currentDate = new Date();
        // Calculate the 20th day from current day
        const tenthDayFormToday = new Date();
        tenthDayFormToday.setDate(currentDate.getDate() - 10);

        // Process all the tickets
        if(ticketsState.ticketList.length > 0) {

            // Prepare to local object to act as frequency map
            let opentTicketsData = {};
            let inProgressTicketsData = {};
            let resolvedTicketsData = {};

            // Initialize the frequency map withe default value 0 for the last 10 days
            for(let i = 0; i < 10; i++){

                // Get the ith day from today
                const dateObject = new Date();
                dateObject.setDate(currentDate.getDate() - i);
                /**
                 * dateObject.toLocaleDateString() -> gives a string in the format DD/MM/YYYY
                 * Convert this value YYYY/MM/DD
                 */
                opentTicketsData[dateObject.toLocaleDateString().split("/").reverse().join("-")] = 0;
                inProgressTicketsData[dateObject.toLocaleDateString().split("/").reverse().join("-")] = 0;
                resolvedTicketsData[dateObject.toLocaleDateString().split("/").reverse().join("-")] = 0;
            }

            //Process all the tickets one by one
            ticketsState.ticketList.forEach((ticket) => {

                // Get the date part from the tickets by removing everything post the character T
                let date = ticket.createdAt.split("T")[0];
                let ticketDate = new Date(ticket.createdAt);

                // If ticket is open and lies in the last 10 days add it
                if(ticket.status == 'open' && ticketDate > tenthDayFormToday){
                   opentTicketsData[date] = (!opentTicketsData[date]) ? 1 : opentTicketsData[date] + 1;
                }

                // If ticket is inprogress and lies in the last 10 days add it.
                if(ticket.status == 'inProgress' && ticketDate > tenthDayFormToday){
                    inProgressTicketsData[date] = (!inProgressTicketsData[date]) ? 1 : inProgressTicketsData[date] + 1;
                }


                // If ticket is resolve and lies in the last 10 days add it.
                if(ticket.status == 'resolved' && ticketDate > tenthDayFormToday){
                    resolvedTicketsData[date] = (!resolvedTicketsData[date]) ? 1 : resolvedTicketsData[date] + 1;
                }
            })

            // Upadate the state
            setTicketChartData({
                openTickets: opentTicketsData,
                inProgressTickets: inProgressTicketsData,
                resolveTicketts: resolvedTicketsData,
            })
        }
    }
    useEffect(() => {

        processOpenTickets()

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