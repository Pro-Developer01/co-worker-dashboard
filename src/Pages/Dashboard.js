import React, { useEffect, useState } from "react";
import Breadcum from "../Components/Breadcum/Breadcum";
import DataCard from "../Components/DataCard/DataCard";
import InviteCard from "../Components/InviteCard/InviteCard";

// inital co workers data before any interaction as suggested from figma file
const coWorkersData_initial = [
    {
        email: "shivanju@cashwise.in",
        role: "admin",
        reInvite: false,
    },
    {
        email: "siddhant@cashwise.in",
        role: "admin",
        reInvite: true,
    },
];

export default function Dashboard() {
    // states for managing Co Workers data
    const [workerData, setWorkerData] = useState(coWorkersData_initial);
    const [recievedData, setRecievedData] = useState([]);

    // logic fire when recievedData changes, hence effect other child components
    useEffect(() => {
        const allData = [...coWorkersData_initial, ...recievedData];
        setWorkerData(allData);
    }, [recievedData]);

    return (
        <div className="dashboard">
            {/* breadcum of page as name suggest */}
            <Breadcum heading={"Co-Workers"} />

            {/* here user can fill cowerkers details to be invited  */}
            <InviteCard setRecievedData={setRecievedData} />

            {/* this component Renders all the details of co-workers saved by user */}
            <DataCard workerData={workerData} setWorkerData={setWorkerData} />
        </div>
    );
}
