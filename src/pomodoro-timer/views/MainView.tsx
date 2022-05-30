import "./main-view.scss";

import React from "react";
import SettingsIcon from "../components/Settings/SettingsIcon";
import Timer from "../components/Timer/Timer";

const MainView: React.FC = () => {
  return (
    <div className="main-view__wrapper">
      <div className="container">
        <Timer />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default MainView;
