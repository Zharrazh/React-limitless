import React from "react"
import "./PageContent.scss"
import { DashboardPage } from "./DashboardPage/DashboardPage"

export const PageContent = () => {
    return (
        <div className="pageContent">
            <DashboardPage/>
        </div>
    )
}