import "./TrafficStatItem.scss";
import React, { FunctionComponent } from "react";
import {
  RoundedIcon,
  RoundedIconColors,
} from "../../../../../../utils/Components/RoundedIcon";

import fakeMiniGraph from "../../../../../../assets/images/fake_mini_graph.png"

type TrafficStatItemProps = {
  iconClassNames: string;
  iconColor: RoundedIconColors;
  title: string;
  avgValue: string;
};

export const TrafficStatItem: FunctionComponent<TrafficStatItemProps> = (
  props
) => {
  return (
    <div className={"traficStatItem"}>
      <div className="traficStatItem__info">
        <RoundedIcon
          iconClassNames={props.iconClassNames}
          color={props.iconColor}
        />
        <div className="traficStatItem__info__text">
          <div className="traficStatItem__info__text__title">{props.title}</div>
          <div className="traficStatItem__info__text__avg">
            <span>{props.avgValue} avg</span>
          </div>
        </div>
      </div>
      <div className="traficStatItem__graph">
          <img src={fakeMiniGraph} alt="fakeMiniGraph"/>
      </div>
    </div>
  );
};
