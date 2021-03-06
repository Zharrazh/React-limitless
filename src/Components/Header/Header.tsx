import React, { FunctionComponent } from "react";
import { Logo } from "./Logo/Logo";
import "./Header.scss";
import "../../utils/styles/extendIconSize.scss";
import {
  StatusLabel,
  StatusType,
  StatusSize,
} from "../../utils/Components/StatusLabel";
import { ProfileNav } from "./ProfileNav/ProfileNav";
import avatar from "../../assets/images/ava1.jpg"
import { GitUpdateToggler } from "./GitUpdateToggler/GitUpdateToggler";

type HeaderProps= {
  setExpandedSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isExpandedSidebar: boolean;
}


export const Header: FunctionComponent<HeaderProps> = (props) => {

  const toggleSidebar = () => {
    props.setExpandedSidebar(!props.isExpandedSidebar)
  }
  
  return (
    <div className="header">
      <div className="header__leftSide">
        <Logo />
        <div className="header__leftSide__sidebarToggler" onClick={toggleSidebar}>
          <i className="fas fa-align-justify fa-lg"></i>
        </div>
        <GitUpdateToggler />
        <div className="header__leftSide__statusLabel">
          <StatusLabel
            text="Online"
            type={StatusType.SUCCESS}
            size={StatusSize.MEDIUM}
          />
        </div>
      </div>
      <div className="header__rightSide">
        <div className="header__rightSide__userOnlineToggler">
          <i className="fas fa-users fa-lg"></i>
        </div>
        <div className="header__rightSide__messagesToggler">
          <i className="fas fa-comments fa-lg"></i>
        </div>
        <ProfileNav  name="Victoria" avatar={avatar}/>
      </div>
    </div>
  );
};
