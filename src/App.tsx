import React, { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Content } from "./Components/Content/Content";

function App() {
  let [isExpandedSidebar, setExpandedSidebar] = useState(false);
  
  return (
    <div className="App">
      <Header
        setExpandedSidebar={setExpandedSidebar}
        isExpandedSidebar={isExpandedSidebar}
      />
      <Content isExpandedSidebar={isExpandedSidebar}/>
    </div>
  );
}

export default App;
