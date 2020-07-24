import "./RoundedIcon.scss";
import { FunctionComponent } from "react";
import React from "react";
import cn from "classnames";

export enum RoundedIconColors {
  TURQUOISE = "TURQUOISE",
  ORANGE = "ORANGE",
  VIOLET = "VIOLET",
}

type RoundedIconProps = {
  iconClassNames: string;
  color: RoundedIconColors;
};

export const RoundedIcon: FunctionComponent<RoundedIconProps> = (props) => {
  return (
    <div className={`roundedIcon fa-stack fa-lg ${props.color}`}>
      <i className="far fa-circle fa-stack-2x"></i>
      <i className={cn("fa-stack-1x", props.iconClassNames)}></i>
    </div>
  );
};
