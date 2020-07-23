import { FunctionComponent } from "react"
import React from "react"
import "./ProfileNav.scss"

type ProfileNavProps = {
    name: string,
    avatar: string
}

export const ProfileNav: FunctionComponent<ProfileNavProps> = (props) => {
    return (
        <div className="profileNav">
            <img src={props.avatar} alt="avatar"/>
            <span>{props.name}</span>
            <i className="fa fa-angle-down"></i>
        </div>
    )
}