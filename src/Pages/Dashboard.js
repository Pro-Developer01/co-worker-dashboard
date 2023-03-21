import React, { useEffect, useState } from 'react'
import Breadcum from '../Components/Breadcum/Breadcum'
import DataCard from '../Components/DataCard/DataCard'
import InviteCard from '../Components/InviteCard/InviteCard'
const coWorkersData_initial = [
    {
        email: 'shivanju@cashwise.in',
        role: 'admin',
        reInvite: false
    },
    {
        email: 'siddhant@cashwise.in',
        role: 'admin',
        reInvite: true
    }
]
export default function Dashboard() {
    const [workerData, setWorkerData] = useState(coWorkersData_initial)
    const [recievedData, setRecievedData] = useState([])
    useEffect(() => {
        const allData = [...coWorkersData_initial, ...recievedData]
        setWorkerData(allData);
        console.log('dashboad', recievedData)
    }, [recievedData])
    console.log(workerData)
    return (
        <div className='dashboard'>
            <Breadcum heading={'Co-Workers'} />
            <InviteCard setRecievedData={setRecievedData} />
            <DataCard workerData={workerData} setWorkerData={setWorkerData} />
        </div>
    )
}
