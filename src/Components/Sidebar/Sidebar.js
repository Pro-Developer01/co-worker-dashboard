import React from "react";
import './Sidebar.css'
const menuItems = [
    {
        img: "Assets/folderPlus.png",
        name: "Document Generation",
    },
    {
        img: "Assets/folder_shared.png",
        name: "Corporate Documents",
    },
    {
        img: "Assets/folder_open.png",
        name: "Filing Documents ",
    },
];


export default function Sidebar() {
    return (
        <div className="sidebarContainer">
            <div className="sidebarHeader">
                <img src="Assets/logo.svg" alt="logo" />
            </div>
            <div className="sidebarEntity">
                <img src="Assets/gSymbol.svg" alt="GSymbol" />
                <div className="entityText">
                    <span>Entity Name</span>
                    <a href="www.website.com">www.website.com</a>
                </div>
                <div className="entityArrow">#</div>
            </div>
            <div className="sidebarMenu">
                {menuItems.map((item, index) => {
                    return (
                        <div key={index} className="menuItem">
                            <img src={item.img} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
