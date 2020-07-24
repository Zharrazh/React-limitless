import "./DashboardHeader.scss";
import React from "react";
import { CommonContainer } from "../../../../../utils/Components/CommonContainer";
import { BlueBtnWithText } from "../../../../../utils/Components/BlueBtnWithText";
import { SubContainer } from "../../../../../utils/Components/SubContainer";
import { CommonBtn } from "../../../../../utils/Components/CommonBtn";

export const DashboardHeader = () => {
  return (
    <div className="dashboardHeader">
      <CommonContainer>
        <div className="dashboardHeader__main">
          <div className="dashboardHeader__main__title">
            <i className="far fa-arrow-alt-circle-left fa-lg"></i>
            <div className="dashboardHeader__main__title__text">
              <div className="dashboardHeader__main__title__text__controller">
                Home
              </div>
              <div className="dashboardHeader__main__title__text__method">
                &nbsp;-&nbsp;Dashboard
              </div>
            </div>
          </div>
          <div className="dashboardHeader__main__controls">
            <BlueBtnWithText
              icon={<i className="far fa-chart-bar fa-lg"></i>}
              title="Statistics"
            />
            <BlueBtnWithText
              icon={<i className="fas fa-calculator fa-lg"></i>}
              title="Invoices"
            />
            <BlueBtnWithText
              icon={<i className="far fa-calendar-alt fa-lg"></i>}
              title="Schedule"
            />
          </div>
        </div>
      </CommonContainer>
      <SubContainer>
        <div className="dashboardHeader__sub">
          <div className="dashboardHeader__sub__title">
            <CommonBtn
              icon={<i className="fas fa-home"></i>}
              label="Home"
            />
            <span>/ Dashboard</span>
          </div>
          <div className="dashboardHeader__sub__controls">
            <CommonBtn
              icon={<i className="fas fa-comments m-hr-lg"></i>}
              label="Support"
            />
            <CommonBtn
              icon={<i className="fas fa-cog m-hr-lg"></i>}
              label="Settings"
              angleDown={true}
            />
          </div>
        </div>
      </SubContainer>
    </div>
  );
};
