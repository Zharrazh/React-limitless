import React, { FunctionComponent, ComponentElement } from "react";
import "./CommonContainer.scss";
import { prependOnceListener } from "process";

type CommonContainerProps = {};
export const CommonContainer : FunctionComponent<CommonContainerProps>= (props) => {
  return <div className="commonContainer">{props.children}</div>;
};
