import React from "react";
import { UserCard } from "./UserCard/UserCard";
import "./Sidebar.scss";
import { SidebarCategory } from "./SidebarCategory/SidebarCategory";
import { SidebarItem } from "./SidebarCategory/SidebarItem/SidebarItem";
import { StatusLabel, StatusType, StatusSize } from "../../../utils/Components/StatusLabel";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserCard />
      <SidebarCategory name="MAIN">
        <SidebarItem
          icon={<i className="fas fa-home fa-lg"></i>}
          title="Dashboard"
          selected={true}
        />
        <SidebarItem
          icon={<i className="far fa-clipboard fa-lg"></i>}
          title="Dashboard"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-palette"></i>}
          title="Themes"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-box-open"></i>}
          title="Starter kit"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-box-open"></i>}
          title="Changelog"
          rightEl={<StatusLabel text={"2.3"} type={StatusType.INFO} size={StatusSize.MEDIUM}/>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-text-width"></i>}
          title="RTL version"
          selected={false}
        />
      </SidebarCategory>

      <SidebarCategory name="FORMS">
        <SidebarItem
          icon={<i className="fas fa-home fa-lg"></i>}
          title="Dashboard"
          selected={false}
        />
        <SidebarItem
          icon={<i className="far fa-clipboard fa-lg"></i>}
          title="Dashboard"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-palette"></i>}
          title="Themes"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-box-open"></i>}
          title="Starter kit"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-box-open"></i>}
          title="Changelog"
          rightEl={<StatusLabel text={"2.3"} type={StatusType.INFO} size={StatusSize.MEDIUM}/>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-text-width"></i>}
          title="RTL version"
          selected={false}
        />
      </SidebarCategory>
    
      <SidebarCategory name="COMPONENTS">
        <SidebarItem
          icon={<i className="fas fa-home fa-lg"></i>}
          title="Dashboard"
          selected={false}
        />
        <SidebarItem
          icon={<i className="far fa-clipboard fa-lg"></i>}
          title="Dashboard"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-palette"></i>}
          title="Themes"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-box-open"></i>}
          title="Starter kit"
          rightEl={<i className="fas fa-angle-right"></i>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-box-open"></i>}
          title="Changelog"
          rightEl={<StatusLabel text={"2.3"} type={StatusType.INFO} size={StatusSize.MEDIUM}/>}
          selected={false}
        />
        <SidebarItem
          icon={<i className="fas fa-text-width"></i>}
          title="RTL version"
          selected={false}
        />
      </SidebarCategory>
    </div>
  );
};
