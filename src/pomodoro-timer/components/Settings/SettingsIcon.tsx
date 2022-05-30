import "./settings.scss";

import React, { useContext } from "react";
import {
  SettingsModalContext,
  SettingsModalContextType,
} from "../../contexts/SettingsModalContext/SettingsModalContext";

import settingsIcon from "../../../static/icons/settings_icon.svg";

const SettingsIcon: React.FC = () => {
  const { setSettingsModal } = useContext(
    SettingsModalContext
  ) as SettingsModalContextType;
  return (
    <div className="settings-wrapper">
      <img
        className="settings-icon"
        src={settingsIcon}
        alt="settings icon"
        onClick={() => setSettingsModal(true)}
      />
    </div>
  );
};

export default SettingsIcon;
