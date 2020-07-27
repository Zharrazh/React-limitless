import "./CommonBtn.scss";
import { FunctionComponent } from "react";
import React from "react";
import cn from "classnames"

export enum CommonBtnBgColors  {
  INDIGO = "INDIGO",
  TURQUOISE = "TURQUOISE"
}

type CommonBtnProps = {
  icon?: any;
  label?: string;
  angleDown?: boolean;
  rounded?: boolean;
  bgColor?:CommonBtnBgColors;
};

export const CommonBtn: FunctionComponent<CommonBtnProps> = (
  {angleDown=false, rounded=false, ...props}
) => {
  return (
    <div className={cn("commonBtn", {"rounded":rounded}, props.bgColor)}>
      {props.icon && <div className="commonBtn__icon">{props.icon}</div>}
      {props.label && <div className="commonBtn__title">{props.label}</div>}
      {angleDown && <i className="fa fa-angle-down"></i>}
    </div>
  );
};
