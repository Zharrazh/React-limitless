import React from "react"
import "./Logo.scss"
import logo from "../../../assets/images/logo_light.png"

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Limitless logo"/>
        </div>
    )
}