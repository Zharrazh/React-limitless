import "./SidebarItem.scss";
import { FunctionComponent, useState } from "react";
import React from "react";
import { isNullOrUndefined } from "util";
import cn from "classnames"

type SidebarItemProps = {
  item: SidebarItem;
};

export type SidebarItem = {
  icon: any;
  title: string;
  items?: Array<SidebarItem>;
  rightEl?: any;
};
export const SidebarItem: FunctionComponent<SidebarItemProps> = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);
  const hasChildren = !(
    isNullOrUndefined(item.items) || item.items.length === 0
  );

  const onClickItem = () => {
    if (hasChildren) setExpanded(!isExpanded);
  };
  return (
    <div className="sidebarItem">
      <div className={cn("sidebarItem__parent", {"expanded":isExpanded})} onClick={onClickItem}>
        <div className="sidebarItem__parent__icon">{item.icon}</div>
        <div className="sidebarItem__parent__title">{item.title}</div>

        {item.rightEl && (
          <div className="sidebarItem__parent__rightEl">{item.rightEl}</div>
        )}
        {hasChildren && (
          <div className="sidebarItem__parent__angle">
            <i className="fas fa-angle-right"></i>
          </div>
        )}
      </div>
      {isExpanded && (
        <div className="sidebarItem__children">
          {item.items?.map((i) => (
            <SidebarItem item={i} />
          ))}
        </div>
      )}
    </div>
  );
};
