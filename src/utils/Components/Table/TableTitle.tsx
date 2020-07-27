import "./TableTitle.scss";
import { FunctionComponent } from "react";
import React from "react";

export const TableTitle: FunctionComponent<{}> = (props) => {
  return <div className="tableTitle">{props.children}</div>;
};
