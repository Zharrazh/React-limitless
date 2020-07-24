import "./MarketingCampaigns.scss";
import React from "react";
import { CommonContainer } from "../../../../../utils/Components/CommonContainer";
import {
  RoundLabel,
  RoundLabelColor,
} from "../../../../../utils/Components/RoundLabel";
import { CommonBtn } from "../../../../../utils/Components/CommonBtn";

export const MarketingCampaigns = () => {
  return (
    <div className="marketingCampaigns">
      <CommonContainer>
        <div className="marketingCampaigns__header">
          <div className="marketingCampaigns__header__header">
            <div className="marketingCampaigns__header__header__title">
              Marketing campaigns
            </div>
            <div className="marketingCampaigns__header__header__control">
              <RoundLabel text="28 active" color={RoundLabelColor.GREEN} />
              <CommonBtn
                icon={<i className="fas fa-bars"></i>}
                angleDown={true}
              />
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};
