import "./CommonCard.scss";
import React, { FunctionComponent } from "react";
import { CommonContainer } from "./CommonContainer";

type CommonCardProps = {
  flex?:number;
}
export const CommonCard: FunctionComponent<CommonCardProps> = (props) => {
  return (
    <div className="commonCard" style={{flex:props.flex}}>
      <CommonContainer>{props.children}</CommonContainer>
    </div>
  );
};
