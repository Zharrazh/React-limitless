import "./SalesStatItem.scss";
import { FunctionComponent } from "react";
import React from "react";

type SalesStatItemProps = {
  value: string;
  description: string;
};

export const SalesStatItem: FunctionComponent<SalesStatItemProps> = (props) => {
  return (
    <div className="salesStatItem">
      <div className="salesStatItem__value">{props.value}</div>
      <div className="salesStatItem__description">{props.description}</div>
    </div>
  );
};
