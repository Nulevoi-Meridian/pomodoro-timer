import React, { useReducer } from "react";
import {
  TimerActions,
  TimerActionsTypes,
  TimerContextProps,
  TimerIntialStateType,
} from "./types";

import { POMODORO } from "./constants";

const timerIntialState: TimerIntialStateType = {
  startTimer: false,
  resetTimer: 0,
  timerSettings: {
    pomodoroTimer: 1,
    shortBreakTimer: 2,
    longBreakTimer: 3,
    longBreakInitCounter: 4,
  },
  status: POMODORO,
  longBreakCounter: 4,
  dispatch: () => null,
  timerRender: () => null,
};

export const TimerContext = React.createContext<TimerIntialStateType | null>(
  null
);

const reducer = (state = timerIntialState, action: TimerActions) => {
  switch (action.type) {
    case TimerActionsTypes.START_TIMER:
      return {
        ...state,
        startTimer: true,
      };
    case TimerActionsTypes.STOP_TIMER:
      return {
        ...state,
        startTimer: false,
      };
    case TimerActionsTypes.RESET_TIMER:
      return {
        ...state,
        resetTimer: state.resetTimer + 1,
      };
    case TimerActionsTypes.SET_SETTINGS:
      return {
        ...state,
        timerSettings: action.payload,
      };
    case TimerActionsTypes.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case TimerActionsTypes.SET_COUNTER:
      return {
        ...state,
        longBreakCounter: action.payload,
      };
    default:
      return state;
  }
};

const TimerContextProvider: React.FC<TimerContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, timerIntialState);

  const timerRender = ({ remainingTime }: any) => {
    const minutes = Math.floor(remainingTime / 60).toLocaleString();
    const seconds = (remainingTime % 60).toLocaleString().padStart(2, "0");
    return (
      <div className="timer-item__wrapper">
        <div className="timer-item">
          {minutes}:{seconds}
        </div>
      </div>
    );
  };

  return (
    <TimerContext.Provider
      value={{
        status: state.status,
        startTimer: state.startTimer,
        resetTimer: state.resetTimer,
        timerSettings: state.timerSettings,
        longBreakCounter: state.longBreakCounter,
        dispatch,
        timerRender,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
