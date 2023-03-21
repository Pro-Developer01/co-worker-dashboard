import React, { useState } from 'react'
import './InviteCard.css'

const initialRows = [
    {
        email: '',
        role: 'admin',
        reInvite: true
    },
    {
        email: '',
        role: '',
        reInvite: true
    },
]
export default function InviteCard({ setRecievedData }) {
    const [coWorkersData, setCoWorkersData] = useState(initialRows)
    const addRowHandler = () => {
        const tempRows = JSON.parse(JSON.stringify(coWorkersData));
        const newObj = {
            email: '',
            role: '',
            reInvite: true
        }
        tempRows.push(newObj)
        setCoWorkersData(tempRows)
    }

    const changeHandler = (event, index) => {
        const tempData = JSON.parse(JSON.stringify(coWorkersData));
        const fieldToBeChanged = event.target.name;
        tempData[index][fieldToBeChanged] = event.target.value
        setCoWorkersData(tempData);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(coWorkersData)
        setRecievedData(coWorkersData)
    }
    return (
        <div className='CardContainer'>
            <div className="inviteCardHeader">
                <span>Invite your co-workers to collaborate on Cashwise.</span>
                <div class="tooltip inviteCardHeaderimg"><img src="Assets/info_outline.svg" alt="info" />
                    <span class="tooltiptext Very-Small-Text" id={'tooltipPosition_Info'} >Invited co-workers would have all the permissions except the option to delete the company</span>
                </div>

            </div>
            <form onSubmit={submitHandler}>
                <div >


                    {coWorkersData.map((item, index) => {
                        return (
                            <div key={index} className="inviteCardRows">
                                <input type="email" name="email" id={'email' + index} placeholder='Email' value={item.email} onChange={(event) => { changeHandler(event, index) }} />
                                <select name="role" id={'roleType' + index} value={item.role} onChange={(event) => { changeHandler(event, index) }}>
                                    <option value="" disabled selected hidden>Select</option>
                                    <option value="admin">Admin</option>
                                    <option value="developer">Developer</option>
                                    <option value="owner">Owner</option>
                                </select>
                            </div>
                        )
                    })}

                </div>
                <div className="inviteCardFooter">
                    <span onClick={addRowHandler} >+Add Rows</span>
                    <button type='submit' className='buttonPrimary'>Send Invite</button>
                </div>
            </form>
        </div>
    )
}
