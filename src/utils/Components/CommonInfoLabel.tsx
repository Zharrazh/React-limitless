import "./CommonInfoLabel.scss";
import React, { FunctionComponent } from "react";

type CommonInfoLabelProps = {
  img: string;
  mainInfo: string;
  secondaryInfo: string;
};

export const CommonInfoLabel: FunctionComponent<CommonInfoLabelProps> = (
  props
) => {
  return (
    <div className="commonInfoLabel">
      <div className="commonInfoLabel__img">
        <img src={props.img} alt="" />
      </div>
      <div className="commonInfoLabel__textInfo">
        <div className="commonInfoLabel__textInfo__mainInfo">
          {props.mainInfo}
        </div>
        <div className="commonInfoLabel__textInfo__secondaryInfo">
          {props.secondaryInfo}
        </div>
      </div>
    </div>
  );
};
