import "./MarketingCompaignsStat.scss";
import React, { FunctionComponent } from "react";
import fakeChart from "../../../../../../assets/images/small_circle_chart.png";
import {
  DynamicLabel,
  DynamicLabelIcon,
} from "../../../../../../utils/Components/DynamicLabel";

type MarketingCompaignsStatProps = {
  value: string;
  dynamicValue: string;
  isDynamicPositive: boolean;
  dateTime: string;
};
export const MarketingCompaignsStat: FunctionComponent<MarketingCompaignsStatProps> = (
  props
) => {
  return (
    <div className="marketingCompaignsStat">
      <div className="marketingCompaignsStat__chart">
        <img src={fakeChart} alt="fakeChart" />
      </div>

      <div className="marketingCompaignsStat__textInfo">
        <div className="marketingCompaignsStat__textInfo__valueInfo">
          <div className="marketingCompaignsStat__textInfo__valueInfo__value">
            {props.value}
          </div>
          <DynamicLabel
            iconType={DynamicLabelIcon.ANGLE}
            isPositive={props.isDynamicPositive}
            value={props.dynamicValue}
          />
        </div>
        <div className="marketingCompaignsStat__textInfo__dateTime">
          {props.dateTime}
        </div>
      </div>
    </div>
  );
};
