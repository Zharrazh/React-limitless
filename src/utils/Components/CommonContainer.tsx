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
  withPadding?:boolean;
};
export const CommonContainer : FunctionComponent<CommonContainerProps>= ({color, children, withPadding=true}) => {
  return <div className={cn("commonContainer", color,{"withPadding":withPadding})}>{children}</div>;
};
