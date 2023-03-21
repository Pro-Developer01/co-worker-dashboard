import React from "react";

export default function Breadcum({ heading }) {
    return (
        <div className="breadcumContainer">
            <img src="Assets/Chevron_Left.svg" alt="back" />
            <span>{heading}</span>
        </div>
    );
}
