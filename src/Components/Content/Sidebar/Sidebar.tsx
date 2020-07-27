import React, { FunctionComponent, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import "./Sidebar.scss";
import { SidebarCategory } from "./SidebarCategory/SidebarCategory";

type SidebarProps = {
  isExpanded: boolean;
};

const initSidebarTree: Array<SidebarCategory> = [
  {
    title: "MAIN",
    items: [
      {
        icon: <i className="fas fa-home fa-lg"></i>,
        title: "Dashboard",
      },
      {
        icon: <i className="far fa-clipboard fa-lg"></i>,
        title: "Layouts",
      },
    ],
  },
  {
    title: "SECOND",
    items: [
      {
        icon: <i className="fas fa-home fa-lg"></i>,
        title: "Dashboard",
      },
      {
        icon: <i className="far fa-clipboard fa-lg"></i>,
        title: "Layouts",
        items: [
          {
            icon: <i className="fas fa-home fa-lg"></i>,
            title: "Dashboard",
          },
          {
            icon: <i className="far fa-clipboard fa-lg"></i>,
            title: "Layouts",
          },
        ]
      },
    ],
  },
];
export const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const [sidebarTree, setSidebarTree] = useState(initSidebarTree);

  if (!props.isExpanded) {
    return <div></div>;
  }
  return (
    <div className="sidebar">
      <UserCard />
      {sidebarTree.map(category=> <SidebarCategory category={category}/>)}
    </div>
  );
};
