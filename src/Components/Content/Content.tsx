import React, { FunctionComponent } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { PageContent } from "./PageContent/PageContent";
import "./Content.scss"

type ContentProps = {
  isExpandedSidebar:boolean;
}

export const Content:FunctionComponent<ContentProps> = (props) => {
  return (
    <div className="content">
      <Sidebar isExpanded={props.isExpandedSidebar}/>
      <PageContent/>
    </div>
  )
};
