import "antd/dist/antd";
import "./App.css";
import { Space } from "antd";
import React from "react";
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenu-PageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
