import React, { FunctionComponent } from "react";
import "./SidebarCategory.scss"

type SidebarCategoryProps = {
  name: string;
};

export const SidebarCategory: FunctionComponent<SidebarCategoryProps> = (
  props
) => {
  return (
    <div className="sidebarCategory">
      <div className="sidebarCategory__name">
        <span>{props.name}</span>
      </div>
      <div className="sidebarCategory_items">{props.children}</div>
    </div>
  );
};
