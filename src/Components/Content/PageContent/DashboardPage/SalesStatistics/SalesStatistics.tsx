import "./SalesStatistics.scss";
import { CommonCard } from "../../../../../utils/Components/CommonCard";
import React from "react";
import { SalesStatItem } from "./SalesStatItem/SalesStatItem";
import fakeBigGraph from "../../../../../assets/images/fake_big_graph2.png"

export const SalesStatistics = () => {
  return (
    <CommonCard flex={2}>
      <div className="salesStatistics">
        <div className="salesStatistics__header">
          <div className="salesStatistics__header__title">Sales statistics</div>
          <div className="salesStatistics__header__control">
            <select>
              <option>June, 15 - June, 21</option>
            </select>
          </div>
        </div>
        <div className="salesStatistics__stats">
          <SalesStatItem description="new orders" value="5,689" />
          <SalesStatItem description="this month" value="32,568" />
          <SalesStatItem description="expected profit" value="$23,464" />
        </div>
      <div className="salesStatistics__bigGraph">
          <img src={fakeBigGraph} alt="fakeBigGraph"/>
      </div>
      </div>
    </CommonCard>
  );
};
