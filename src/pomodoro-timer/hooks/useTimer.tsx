import {
  LONG_BREAK,
  POMODORO,
  SHORT_BREAK,
} from "../contexts/TimerContext/constants";
import {
  SettingsType,
  TimerActionsTypes,
  TimerIntialStateType,
} from "../contexts/TimerContext/types";
import { useContext, useState } from "react";

import { START_BUTTON } from "../components/Button/constants";
import { TimerContext } from "../contexts/TimerContext/TimerContext";
import useTimerActions from "./useTimerActions";

const useTimer = () => {
  const {
    dispatch,
    timerRender,
    startTimer,
    resetTimer,
    status,
    longBreakCounter,
    timerSettings,
  } = useContext(TimerContext) as TimerIntialStateType;

  const {
    startTimerAction,
    stopTimerAction,
    resetTimerAction,
    setStatusAction,
    countDownAction,
    setCounterAction,
  } = useTimerActions();

  const [buttonValue, setButtonValue] = useState<string>(START_BUTTON.start);
  const [timer, setTimer] = useState<number>(1);

  const handleStartTimer = () => {
    if (!startTimer) {
      startTimerAction();
      setButtonValue(START_BUTTON.pause);
    } else {
      stopTimerAction();
      setButtonValue(START_BUTTON.continue);
    }
  };

  const handleResetTimer = () => {
    resetTimerAction();
    setButtonValue(START_BUTTON.start);
  };

  const setNewTimer = () => {
    if (status === POMODORO && longBreakCounter !== 1) {
      setTimer(timerSettings.shortBreakTimer);

      setStatusAction(SHORT_BREAK);
    } else if (status === SHORT_BREAK && longBreakCounter !== 0) {
      setTimer(timerSettings.pomodoroTimer);

      setStatusAction(POMODORO);
      countDownAction(longBreakCounter);
    } else if (status === POMODORO && longBreakCounter === 1) {
      setTimer(timerSettings.longBreakTimer);

      setStatusAction(LONG_BREAK);
    } else {
      setTimer(timerSettings.pomodoroTimer);

      stopTimerAction();
      setStatusAction(POMODORO);
      setCounterAction(timerSettings.longBreakInitCounter);
      setButtonValue(START_BUTTON.startNew);
    }
    dispatch({ type: TimerActionsTypes.RESET_TIMER });
  };

  const setSettings = (
    settingsTimer: SettingsType,
    longBreakCounter: number
  ) => {
    const { pomodoroTimer } = settingsTimer;
    setTimer(pomodoroTimer);

    dispatch({ type: TimerActionsTypes.SET_SETTINGS, payload: settingsTimer });
    dispatch({
      type: TimerActionsTypes.SET_COUNTER,
      payload: longBreakCounter,
    });
  };

  return {
    timer,
    buttonValue,
    startTimer,
    resetTimer,
    status,
    longBreakCounter,
    timerRender,
    handleStartTimer,
    handleResetTimer,
    setNewTimer,
    setSettings,
  };
};

export default useTimer;
