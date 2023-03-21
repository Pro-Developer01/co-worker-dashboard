import React, { useState } from "react";
import "./InviteCard.css";

// inital rows as suggested from figma file
const initialRows = [
    {
        email: "",
        role: "admin",
        reInvite: true,
    },
    {
        email: "",
        role: "",
        reInvite: true,
    },
];

export default function InviteCard({ setRecievedData }) {
    const [coWorkersData, setCoWorkersData] = useState(initialRows);

    // function for addingextra Rows
    const addRowHandler = () => {
        const tempRows = JSON.parse(JSON.stringify(coWorkersData));
        const newObj = {
            email: "",
            role: "",
            reInvite: true,
        };
        tempRows.push(newObj);
        setCoWorkersData(tempRows);
    };

    // function for handling changes in input fields efficiently
    const changeHandler = (event, index) => {
        const tempData = JSON.parse(JSON.stringify(coWorkersData));
        const fieldToBeChanged = event.target.name;
        tempData[index][fieldToBeChanged] = event.target.value;
        setCoWorkersData(tempData);
    };

    //function used for finally sending data back to dashboard in order to populate it to other components
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(coWorkersData);
        setRecievedData(coWorkersData);
    };
    return (
        // main container
        <div className="CardContainer">

            {/* header of Invite card */}
            <div className="inviteCardHeader">
                <span>Invite your co-workers to collaborate on Cashwise.</span>
                <div class="tooltip inviteCardHeaderimg">
                    <img src="Assets/info_outline.svg" alt="info" />
                    <span class="tooltiptext Very-Small-Text" id={"tooltipPosition_Info"}>
                        Invited co-workers would have all the permissions except the option
                        to delete the company
                    </span>
                </div>
            </div>

            {/* form including input feilds for co-workers data filling */}
            <form onSubmit={submitHandler}>
                <div>
                    {coWorkersData.map((item, index) => {
                        return (
                            <div key={index} className="inviteCardRows">
                                <input
                                    type="email"
                                    name="email"
                                    id={"email" + index}
                                    placeholder="Email"
                                    value={item.email}
                                    onChange={(event) => {
                                        changeHandler(event, index);
                                    }}
                                />
                                <select
                                    name="role"
                                    id={"roleType" + index}
                                    value={item.role}
                                    onChange={(event) => {
                                        changeHandler(event, index);
                                    }}
                                >
                                    <option value="" disabled selected hidden>
                                        Select
                                    </option>
                                    <option value="admin">Admin</option>
                                    <option value="developer">Developer</option>
                                    <option value="owner">Owner</option>
                                </select>
                            </div>
                        );
                    })}
                </div>

                {/* footer section  */}
                <div className="inviteCardFooter">

                    {/* for adding extra rows  */}
                    <span onClick={addRowHandler}>+Add Rows</span>

                    {/* button for submiting form data and sending it to dashboard */}
                    <button type="submit" className="buttonPrimary">
                        Send Invite
                    </button>
                </div>
            </form>
        </div>
    );
}
