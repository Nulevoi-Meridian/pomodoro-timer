import { ReactElement } from "react";

export interface TimerIntialStateType {
  startTimer: boolean;
  resetTimer: number;
  timerSettings: SettingsType;
  status: string;
  longBreakCounter: number;
  dispatch: React.Dispatch<TimerActions>;
  timerRender: (remainingTime: any) => React.ReactNode;
}

export interface SettingsType {
  [key: string]: number;
}

export interface TimerContextProps {
  children: ReactElement;
}

interface StartTimerAction {
  type: TimerActionsTypes.START_TIMER;
}

interface PauseTimerAction {
  type: TimerActionsTypes.STOP_TIMER;
}

interface ResetTimerAction {
  type: TimerActionsTypes.RESET_TIMER;
}

interface SetNewTimerAction {
  type: TimerActionsTypes.SET_NEW_TIMER;
}

interface SetSettingsAction {
  type: TimerActionsTypes.SET_SETTINGS;
  payload: SettingsType;
}

interface StatusAction {
  type: TimerActionsTypes.SET_STATUS;
  payload: string;
}

interface SetCounterAction {
  type: TimerActionsTypes.SET_COUNTER;
  payload: number;
}

export type TimerActions =
  | StartTimerAction
  | PauseTimerAction
  | ResetTimerAction
  | SetNewTimerAction
  | SetSettingsAction
  | StatusAction
  | SetCounterAction;

export enum TimerActionsTypes {
  START_TIMER = "START_TIMER",
  STOP_TIMER = "STOP_TIMER",
  RESET_TIMER = "RESET_TIMER",
  SET_NEW_TIMER = "SET_NEW_TIMER",
  SET_SETTINGS = "SET_SETTINGS,",
  SET_COUNTER = "SET_COUNTER",
  SET_STATUS = "SET_STATUS",
}
