import { FunctionComponent } from "react";
import React from "react";
import "./StatusLabel.scss"

export enum StatusType {
  SUCCESS = "statusLabel__SUCCESS",
  ERROR = "statusLabel__ERROR",
  UNKNOWN = "statusLabel__UNKNOWN",
}

export enum StatusSize {
    SMALL = "statusLabel__SMALL",
    MEDIUM = "statusLabel__MEDIUM"
  }

type StatusLabelProps = {
  text: string;
  type: StatusType;
  size: StatusSize;
};

export const StatusLabel: FunctionComponent<StatusLabelProps> = (props) => {
  return <span className={"statusLabel" + " " + props.type + " " + props.size}>{props.text}</span>;
};
