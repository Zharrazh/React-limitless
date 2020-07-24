import "./RoundLabel.scss"
import React, { FunctionComponent } from "react"
import cn from "classnames"

export enum RoundLabelColor {
    GREEN="GREEN",
    RED="RED"
}

type RoundLabelProps = {
    text:string;
    color: RoundLabelColor;
}

export const RoundLabel : FunctionComponent<RoundLabelProps> = (props) => {
    return (
        <div className={cn("roundLabel", props.color)}>
            {props.text}
        </div>
    )
}