import { FunctionComponent } from "react";
import React from "react";
import "./BlueBtnWithText.scss";

type BlueBtnWithTextProps = {
  icon: any;
  title: string;
};

export const BlueBtnWithText: FunctionComponent<BlueBtnWithTextProps> = (
  props
) => {
  return (
    <div className="blueBtnWithText">
      <div className="blueBtnWithText__icon">{props.icon}</div>
      <div className="blueBtnWithText__title">{props.title}</div>
    </div>
  );
};
