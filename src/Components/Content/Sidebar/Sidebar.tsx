import React from "react"
import { UserCard } from "./UserCard/UserCard"
import "./Sidebar.scss"
import { SidebarCategory } from "./SidebarCategory/SidebarCategory"

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <UserCard/>
            <SidebarCategory name="MAIN">
                
            </SidebarCategory>
        </div>
    )
} 