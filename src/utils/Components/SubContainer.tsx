import "./SubContainer.scss"
import { FunctionComponent } from "react"
import React from "react"

export const SubContainer: FunctionComponent = (props) => {
    return (
        <div className="subContainer">
            {props.children}
        </div>
    )
}