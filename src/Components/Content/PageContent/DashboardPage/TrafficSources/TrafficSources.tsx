import "./TrafficSources.scss";
import React from "react";
import { CommonCard } from "../../../../../utils/Components/CommonCard";
import { RoundedIconColors } from "../../../../../utils/Components/RoundedIcon";
import { TrafficStatItem } from "./TrafficStatItem/TrafficStatItem";
import fakeBigGraph from "../../../../../assets/images/fake_big_graph.png";

export const TrafficSources = () => {
  return (
    <CommonCard flex={3}>
      <div className="trafficSources">
        <div className="trafficSources__header">
          <div className="trafficSources__header__title">Traffic sources</div>
          <div className="trafficSources__header__control">
            <span>Live update: ???</span>
          </div>
        </div>
        <div className="trafficSources__stats">
          <TrafficStatItem
            title="New visitors"
            avgValue="2,349"
            iconClassNames="fas fa-plus"
            iconColor={RoundedIconColors.TURQUOISE}
          />
          <TrafficStatItem
            title="New sessions"
            avgValue="08:20"
            iconClassNames="fas fa-stopwatch"
            iconColor={RoundedIconColors.ORANGE}
          />
          <TrafficStatItem
            title="Total online"
            avgValue="5,378"
            iconClassNames="fas fa-users"
            iconColor={RoundedIconColors.VIOLET}
          />
        </div>
        <div className="trafficSources__bigGraph">
          <img src={fakeBigGraph} alt="fakeBigGraph" />
        </div>
      </div>
    </CommonCard>
  );
};
