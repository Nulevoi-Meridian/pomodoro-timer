import "./timer.scss";

import { LONG_BREAK, POMODORO } from "../../contexts/TimerContext/constants";
import React, { useContext, useEffect, useState } from "react";
import {
  SettingsModalContext,
  SettingsModalContextType,
} from "../../contexts/SettingsModalContext/SettingsModalContext";
import {
  SettingsType,
  TimerIntialStateType,
} from "../../contexts/TimerContext/types";

import Button from "../Button/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { RESET_BUTTON } from "../../components/Button/constants";
import SettingsModal from "../Settings/SettingsModal";
import { TimerContext } from "../../contexts/TimerContext/TimerContext";
import { isValidInputValue } from "../../helpers/isValidInputValue";
import useTimer from "../../hooks/useTimer";

const Timer: React.FC = () => {
  const {
    timer,
    resetTimer,
    startTimer,
    buttonValue,
    status,
    longBreakCounter,
    timerRender,
    handleResetTimer,
    handleStartTimer,
    setNewTimer,
    setSettings,
  } = useTimer();

  const { isSettingsModal, setSettingsModal } = useContext(
    SettingsModalContext
  ) as SettingsModalContextType;
  const { timerSettings } = useContext(TimerContext) as TimerIntialStateType;

  const [timersValue, setTimersValue] = useState<SettingsType>(timerSettings);
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (event: {
    target: { name: string; value: string };
  }) => {
    setTimersValue({
      ...timersValue,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  useEffect(() => {
    setError(isValidInputValue(timersValue));
  }, [timersValue]);

  const handleSaveChanges = () => {
    if (!error) return;

    const newTimerSettings = {
      pomodoroTimer: timersValue.pomodoroTimer,
      shortBreakTimer: timersValue.shortBreakTimer,
      longBreakTimer: timersValue.longBreakTimer,
      longBreakInitCounter: timersValue.longBreakInitCounter,
    };
    const longBreakCounter = timersValue.longBreakInitCounter;

    setSettings(newTimerSettings, longBreakCounter);
    setTimersValue(newTimerSettings);
    setSettingsModal(false);
  };

  return (
    <div
      className={`timer-wrapper ${
        status === POMODORO ? "timer-pomodoro" : "timer-short"
      }`}
    >
      {status !== LONG_BREAK ? (
        <div className="timer-pomodoro-left">
          {longBreakCounter} pomodoro before long break
        </div>
      ) : null}

      <div className="timer-status">{status} time!</div>
      <div className="timer">
        <CountdownCircleTimer
          key={resetTimer}
          isPlaying={startTimer}
          duration={timer * 60}
          trailColor={"rgba(250, 250, 250, 0.1)"}
          colors={"#FAFAFA"}
          strokeWidth={8}
          size={220}
          onComplete={() => {
            setNewTimer();
          }}
        >
          {timerRender}
        </CountdownCircleTimer>
      </div>
      <div className="buttons-wrapper">
        <Button buttonValue={buttonValue} onClick={handleStartTimer} />
        <Button buttonValue={RESET_BUTTON} onClick={handleResetTimer} />
      </div>
      {isSettingsModal ? (
        <SettingsModal
          error={error}
          timersValue={timersValue}
          onChange={handleInputChange}
          onClose={setSettingsModal}
          onSave={handleSaveChanges}
        />
      ) : null}
    </div>
  );
};

export default Timer;
