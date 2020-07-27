import "./CommonCard.scss";
import React, { FunctionComponent } from "react";
import { CommonContainer, CommonContainerColor } from "./CommonContainer";

type CommonCardProps = {
  flex?: number;
  color?: CommonContainerColor;
};
export const CommonCard: FunctionComponent<CommonCardProps> = (props) => {
  return (
    <div className="commonCard" style={{ flex: props.flex }}>
      <CommonContainer color={props.color}>{props.children}</CommonContainer>
    </div>
  );
};
