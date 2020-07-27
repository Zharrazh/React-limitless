import "./DashboardPage.scss";
import { DashboardHeader } from "./DashboardHeader/DashboardHeader";
import React from "react";
import { TrafficSources } from "./TrafficSources/TrafficSources";
import { SalesStatistics } from "./SalesStatistics/SalesStatistics";
import { MarketingCampaigns } from "./MarketingCampaigns/MarketingCampaigns";
import { ColorCardStat } from "./ColorCardStat/ColorCardStat";
import { CommonContainerColor } from "../../../../utils/Components/CommonContainer";
import {
  RoundLabel,
  RoundLabelColor,
} from "../../../../utils/Components/RoundLabel";
import { CommonBtn } from "../../../../utils/Components/CommonBtn";

export const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <DashboardHeader />

      <div className="dashboardPage__content">
        <div className="dashboardPage__content__mainInfo">
          <TrafficSources />

          <SalesStatistics />
        </div>
        <div className="dashboardPage__content__secondaryInfo">
          <div className="dashboardPage__content__secondaryInfo__leftColumn">
            <MarketingCampaigns />
            <div className="dashboardPage__content__secondaryInfo__leftColumn__colorCards">
              <ColorCardStat
                color={CommonContainerColor.TURQUOISE}
                value="3,450"
                description="Members online"
                avg="489"
                addition={
                  <RoundLabel
                    text="+53,6%"
                    color={RoundLabelColor.DARK_TURQUISE}
                  />
                }
              />
              <ColorCardStat
                color={CommonContainerColor.CRIMSON}
                value="49.4%"
                description="Current server load"
                avg="34.6%"
                addition={
                  <CommonBtn
                    angleDown={true}
                    icon={<i className="fas fa-cog"></i>}
                  />
                }
              />
              <ColorCardStat
                color={CommonContainerColor.BLUE}
                value="$18,390"
                description="Today's revenue"
                avg="$37,578"
                addition={
                  <CommonBtn icon={<i className="fas fa-sync-alt"></i>} />
                }
              />
            </div>
          </div>
          <div className="dashboardPage__content__secondaryInfo__rightColumn"></div>
        </div>
      </div>
    </div>
  );
};
