import "./settings.scss";

import Button from "../Button/Button";
import Input from "../Input/Input";
import React from "react";
import { SAVE_BUTTON } from "../../components/Button/constants";
import { SettingsType } from "../../contexts/TimerContext/types";
import closeIcon from "../../../static/icons/close-icon.png";

interface SettingsModalProps {
  timersValue: SettingsType;
  error: boolean;
  onClose: (value: boolean) => void;
  onChange: (event: {
    target: {
      value: string;
      name: string;
    };
  }) => void;
  onSave: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  error,
  timersValue,
  onClose,
  onChange,
  onSave,
}) => {
  return (
    <div className="settings-modal">
      <div className="settings-modal-inner">
        <div className="settings-modal__close-icon">
          <img
            onClick={() => onClose(false)}
            src={closeIcon}
            alt="close icon"
          />
        </div>
        <div className="settings-modal__items">
          <div className="settings-modal__item">
            <label htmlFor="pomodoro">Pomodoro (1min by default)</label>
            <Input
              id={"pomodoro"}
              name={"pomodoroTimer"}
              placeholder={"Enter pomodoro time"}
              value={timersValue.pomodoroTimer || ""}
              onChange={onChange}
            />
          </div>
          <div className="settings-modal__item">
            <label htmlFor="short-break">Short Break (2min by default)</label>
            <Input
              id={"short-break"}
              name={"shortBreakTimer"}
              placeholder={"Enter short break time"}
              value={timersValue.shortBreakTimer || ""}
              onChange={onChange}
            />
          </div>
          <div className="settings-modal__item">
            <label htmlFor="long-break">Long Break (3min by default)</label>
            <Input
              id={"long-break"}
              name={"longBreakTimer"}
              placeholder={"Enter long break time"}
              value={timersValue.longBreakTimer || ""}
              onChange={onChange}
            />
          </div>
          <div className="settings-modal__item">
            <label htmlFor="counter">
              Number of pomodoro between long break (4 by default)
            </label>
            <Input
              id={"counter"}
              name={"longBreakInitCounter"}
              placeholder={"Enter number of pomodoro"}
              value={timersValue.longBreakInitCounter || ""}
              onChange={onChange}
            />
          </div>
          <span className="settings-modal__error">
            {!error
              ? "all fields are required and value cannot be negative"
              : null}
          </span>
        </div>
        <Button buttonValue={SAVE_BUTTON} onClick={onSave} />
      </div>
    </div>
  );
};

export default SettingsModal;
