import React, { FunctionComponent} from "react";
import "./CommonContainer.scss";

type CommonContainerProps = {};
export const CommonContainer : FunctionComponent<CommonContainerProps>= (props) => {
  return <div className="commonContainer">{props.children}</div>;
};
