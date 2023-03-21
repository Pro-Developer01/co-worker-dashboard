import React from 'react'
import './InviteCard.css'
const rows = [1, 2]
export default function InviteCard() {
    return (
        <div className='CardContainer'>
            <div className="inviteCardHeader">
                <span>Invite your co-workers to collaborate on Cashwise.</span>
                <span>#</span>
            </div>
            <div >
                {rows.map((item, index) => {
                    return (
                        <div key={index} className="inviteCardRows">
                            <input type="email" name="email" id={'email' + index} placeholder='Email' />
                            <select name="roleType" id={'roleType' + index} placeholder='Select'>
                                <option value="admin">Admin</option>
                                <option value="developer">Developer</option>
                                <option value="owner">Owner</option>
                            </select>
                        </div>
                    )
                })}
            </div>
            <div className="inviteCardFooter">
                <span >+ Add Rows</span>
                <button className='buttonPrimary'>Send Invite</button>
            </div>
        </div>
    )
}
