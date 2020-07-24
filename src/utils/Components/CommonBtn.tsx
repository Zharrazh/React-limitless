import "./CommonBtn.scss";
import { FunctionComponent } from "react";
import React from "react";

type CommonBtnProps = {
  icon?: any;
  label?: string;
  angleDown?: boolean;
};

export const CommonBtn: FunctionComponent<CommonBtnProps> = (
  {angleDown=false, ...props}
) => {
  return (
    <div className="commonBtn">
      {props.icon && <div className="commonBtn__icon">{props.icon}</div>}
      {props.label && <div className="commonBtn__title">{props.label}</div>}
      {angleDown && <i className="fa fa-angle-down"></i>}
    </div>
  );
};
