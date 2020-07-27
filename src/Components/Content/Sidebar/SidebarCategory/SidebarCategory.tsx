import React, { FunctionComponent } from "react";
import "./SidebarCategory.scss";
import { SidebarItem } from "./SidebarItem/SidebarItem";

type SidebarCategoryProps = {
  category: SidebarCategory;
};
export type SidebarCategory = {
  title: string;
  items: Array<SidebarItem>;
};

export const SidebarCategory: FunctionComponent<SidebarCategoryProps> = ({
  category
}) => {
  return (
    <div className="sidebarCategory">
      <div className="sidebarCategory__name">
        <span>{category.title}</span>
      </div>
      <div className="sidebarCategory_items">
        {category.items.map((i) => (
          <SidebarItem item={i}/>
        ))}
      </div>
    </div>
  );
};
