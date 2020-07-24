import "./DashboardPage.scss";
import { DashboardHeader } from "./DashboardHeader/DashboardHeader";
import React from "react";
import { TrafficSources } from "./TrafficSources/TrafficSources";
import { SalesStatistics } from "./SalesStatistics/SalesStatistics";
import { MarketingCampaigns } from "./MarketingCampaigns/MarketingCampaigns";

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
                <MarketingCampaigns/>
            </div>
            <div className="dashboardPage__content__secondaryInfo__rightColumn"></div>
        </div>
      </div>
    </div>
  );
};
