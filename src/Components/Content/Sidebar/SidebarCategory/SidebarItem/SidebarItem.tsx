import "./SidebarItem.scss"
import { FunctionComponent } from "react"
import React from "react"

type SidebarItemProps = {
    icon: any;
    title: string;
    rightEl?: any;
    selected: boolean;
}

export const SidebarItem: FunctionComponent<SidebarItemProps> = (props) =>{
    let rootClassName = "sidebarItem"
    if (props.selected) rootClassName += " selected"
    return (
        <div className={rootClassName}>
            <div className="sidebarItem__icon">
                {props.icon}
            </div>
            <div className="sidebarItem__title">
                {props.title}
            </div>

            {props.rightEl &&<div className="sidebarItem_rightEl">{props.rightEl}</div>}
            
        </div>
    )
}