import "./TableSubtitle.scss";
import React, { FunctionComponent } from "react";

export const TableSubtitle: FunctionComponent<{}> = (props) => {
  return <div className="tableSubtitle">{props.children}</div>;
};
