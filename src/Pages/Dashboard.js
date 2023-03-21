import React from 'react'
import Breadcum from '../Components/Breadcum/Breadcum'
import InviteCard from '../Components/InviteCard/InviteCard'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Breadcum heading={'Co-Workers'} />
            <InviteCard />
        </div>
    )
}
