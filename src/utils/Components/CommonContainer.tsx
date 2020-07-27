import React, { FunctionComponent} from "react";
import "./CommonContainer.scss";
import cn from "classnames"

export enum CommonContainerColor {
  TURQUOISE = "TURQUOISE",
  CRIMSON = "CRIMSON",
  BLUE = "BLUE"
}

type CommonContainerProps = {
  color?:CommonContainerColor;
};
export const CommonContainer : FunctionComponent<CommonContainerProps>= (props) => {
  return <div className={cn("commonContainer", props.color)}>{props.children}</div>;
};
