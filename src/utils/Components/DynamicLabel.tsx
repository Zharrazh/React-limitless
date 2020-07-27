import "./DynamicLabel.scss"
import React, { FunctionComponent } from "react"
import cn from "classnames"

export enum DynamicLabelIcon{
    ANGLE,
    ARROW
}
type DynamicLabelProps = {
    iconType: DynamicLabelIcon;
    isPositive: boolean;
    value: string;
}

export const DynamicLabel:FunctionComponent<DynamicLabelProps> = (props) => {
    let icon;
    if (props.iconType===DynamicLabelIcon.ANGLE){
        if(props.isPositive) icon = <i className="fas fa-angle-up"></i>
        else icon = <i className="fas fa-angle-down"></i>
    }
    else if (props.iconType===DynamicLabelIcon.ARROW){
        if(props.isPositive) icon = <i className="fas fa-arrow-up"></i>
        else icon = <i className="fas fa-arrow-down "></i>
    }

    return (
        <div className={cn("dynamicLabel", {"positive": props.isPositive, "negative" : !props.isPositive} )}>
            {icon}
            <span>{props.value}</span>
        </div>   
    )
}