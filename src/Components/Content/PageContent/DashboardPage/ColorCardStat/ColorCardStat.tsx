import "./ColorCardStat.scss";
import React, { FunctionComponent } from "react";
import { CommonCard } from "../../../../../utils/Components/CommonCard";
import { CommonContainerColor } from "../../../../../utils/Components/CommonContainer";

type ColorCardStatProps = {
  color: CommonContainerColor;
  value: string;
  description: string;
  avg: string;
  addition?: any;
};

export const ColorCardStat: FunctionComponent<ColorCardStatProps> = (props) => {
  return (
    <div className="colorCardStat">
      <CommonCard color={props.color}>
        <div className="colorCardStat__inner">
          <div className="colorCardStat__inner__head">
            <div className="colorCardStat__inner__head__value">
              {props.value}
            </div>
            {props.addition && (
              <div className="colorCardStat__inner__head__addition">
                {props.addition}
              </div>
            )}
          </div>
          <div className="colorCardStat__inner__description">
            {props.description}
          </div>
          <div className="colorCardStat__inner__avg">{props.avg} avg</div>
        </div>
      </CommonCard>
    </div>
  );
};
