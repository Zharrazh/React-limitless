import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { PageContent } from "./PageContent/PageContent";
import "./Content.scss"

export const Content = () => {
  return (
    <div className="content">
      <Sidebar/>
      <PageContent/>
    </div>
  )
};
