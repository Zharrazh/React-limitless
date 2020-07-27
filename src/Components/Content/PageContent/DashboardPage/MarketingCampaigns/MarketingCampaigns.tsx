import "./MarketingCampaigns.scss";
import React from "react";
import { CommonContainer } from "../../../../../utils/Components/CommonContainer";
import {
  RoundLabel,
  RoundLabelColor,
} from "../../../../../utils/Components/RoundLabel";
import {
  CommonBtn,
  CommonBtnBgColors,
} from "../../../../../utils/Components/CommonBtn";
import { MarketingCompaignsStat } from "./MarketingCompaignsStat/MarketingCompaignsStat";
import { TableTitle } from "../../../../../utils/Components/Table/TableTitle";
import "../../../../../utils/styles/tables.scss";
import { TableSubtitle } from "../../../../../utils/Components/Table/TableSubtitle";
import { MCTableRow, MCTableRowStatus } from "./MCTableRow/MCTableRow";

import fbIcon from "../../../../../assets/images/facebook.png";
import youtibeIcon from "../../../../../assets/images/youtube.png";
import spotifyIcon from "../../../../../assets/images/spotify.png";
import twitterIcon from "../../../../../assets/images/twitter.png";


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

          <div className="marketingCampaigns__header__info">
            <MarketingCompaignsStat
              value="38,289"
              dynamicValue="(+16.2%)"
              isDynamicPositive={true}
              dateTime="May 12, 12:30 am"
            />
            <MarketingCompaignsStat
              value="2,458"
              dynamicValue="(-4.9%)"
              isDynamicPositive={false}
              dateTime="Jun 4, 4:00 am"
            />
            <CommonBtn
              bgColor={CommonBtnBgColors.INDIGO}
              rounded={true}
              label="View report"
              icon={<i className="fas fa-chart-line fa-lg"></i>}
            />
          </div>
        </div>
      </CommonContainer>
      <div className="marketingCampaigns__table">
        <TableTitle>
          <div className="tbl-col-2">Campaign</div>
          <div className="tbl-col-1">Client</div>
          <div className="tbl-col-1">Changes</div>
          <div className="tbl-col-1">Budget</div>
          <div className="tbl-col-1">Status</div>
          <div>
            <i className="fas fa-angle-down"></i>
          </div>
        </TableTitle>
        <TableSubtitle>
          <div className="tbl-col-1">Today</div>
          <i className="far fa-clock fa-lg"></i>
        </TableSubtitle>
        <MCTableRow
          logoImg={fbIcon}
          companyName="Facebook"
          period="02:00 - 03:00"
          client="Mintlime"
          changes="2.43%"
          isPositiveChanges={true}
          budget="$5,489"
          status={MCTableRowStatus.ACTIVE}
        />
        <MCTableRow
          logoImg={youtibeIcon}
          companyName="Youtube videos"
          period="13:00 - 14:00"
          client="CDSoft"
          changes="3.12%"
          isPositiveChanges={true}
          budget="$2,592"
          status={MCTableRowStatus.CLOSED}
        />
        <MCTableRow
          logoImg={spotifyIcon}
          companyName="Spotify ads"
          period="10:00 - 11:00"
          client="Diligence"
          changes="- 8.02%"
          isPositiveChanges={false}
          budget="$1,268"
          status={MCTableRowStatus.ON_HOLD}
        />
        <MCTableRow
          logoImg={twitterIcon}
          companyName="Twitter ads"
          period="04:00 - 05:00"
          client="Deluxe"
          changes="2.78%"
          isPositiveChanges={true}
          budget="$7,467"
          status={MCTableRowStatus.PENDING}
        />
        <TableSubtitle>
          <div className="tbl-col-1">Yesterday</div>
          <i className="fas fa-history fa-lg"></i>
        </TableSubtitle>
        <MCTableRow
          logoImg={fbIcon}
          companyName="Facebook"
          period="02:00 - 03:00"
          client="Mintlime"
          changes="2.43%"
          isPositiveChanges={true}
          budget="$5,489"
          status={MCTableRowStatus.ACTIVE}
        />
        <MCTableRow
          logoImg={youtibeIcon}
          companyName="Youtube videos"
          period="13:00 - 14:00"
          client="CDSoft"
          changes="3.12%"
          isPositiveChanges={true}
          budget="$2,592"
          status={MCTableRowStatus.CLOSED}
        />
        <MCTableRow
          logoImg={spotifyIcon}
          companyName="Spotify ads"
          period="10:00 - 11:00"
          client="Diligence"
          changes="- 8.02%"
          isPositiveChanges={false}
          budget="$1,268"
          status={MCTableRowStatus.ON_HOLD}
        />
        <MCTableRow
          logoImg={twitterIcon}
          companyName="Twitter ads"
          period="04:00 - 05:00"
          client="Deluxe"
          changes="2.78%"
          isPositiveChanges={true}
          budget="$7,467"
          status={MCTableRowStatus.PENDING}
        />
      </div>
    </div>
  );
};
