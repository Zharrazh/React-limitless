import "./TableRow.scss";
import { FunctionComponent } from "react";
import React from "react";

export const TableRow: FunctionComponent<{}> = (props) => {
  return <div className="tableRow">{props.children}</div>;
};
