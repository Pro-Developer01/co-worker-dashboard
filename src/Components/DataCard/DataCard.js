import React, { useEffect, useState } from 'react'
import './DataCard.css'

export default function DataCard({ workerData, setWorkerData }) {
    const [coWorkersData, setCoWorkersData] = useState(workerData);

    const handlDelete = (index) => {
        const editedData = coWorkersData.filter((item, id) => {
            return !(id === index);
        })
        setCoWorkersData(editedData);
    }
    const resendInvite = (index) => {
        const tempData = JSON.parse(JSON.stringify(coWorkersData));
        tempData[index]['reInvite'] = false;
        setCoWorkersData(tempData)
        alert('Yep! Invite is re-sent. ')

    }
    useEffect(() => {
        setCoWorkersData(workerData)
    }, [workerData])
    return (
        <div className='CardContainer'>
            <div className="dataCardHeader Sub-Head">
                <span>Co-Workers Email</span>
                <span>Roles</span>
            </div>
            <div className="dataCardContent">
                <div className="dataCardRows ownerData ">
                    <span>akshay@cashwise.in</span>
                    <span>Owner</span>
                </div>
                {coWorkersData.map((item, index) => {
                    return (
                        <div key={index} className="dataCardRows">
                            <span>{item.email}</span>
                            <select name="roleType" id={'roleType' + index} placeholder='Select' value={item.role}>
                                <option value="admin">Admin</option>
                                <option value="developer">Developer</option>
                                <option value="owner">Owner</option>
                            </select>
                            <div class="tooltip "><img src="Assets/Trash_Empty.svg" alt="delete-icon" onClick={() => handlDelete(index)} style={{
                                cursor: 'pointer'
                            }} />
                                <span class="tooltiptext Very-Small-Text" id={'tooltipPosition_delete'}>Delete this role</span>
                            </div>
                            {item.reInvite &&
                                <div class="tooltip " style={{ margin: 0 }}><img src="Assets/Redo.svg" alt="Redo-icon" onClick={() => resendInvite(index)} style={{
                                    cursor: 'pointer'
                                }} />
                                    <span class="tooltiptext Very-Small-Text" id={'tooltipPosition_delete'}>Resend invite</span>
                                </div>}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
