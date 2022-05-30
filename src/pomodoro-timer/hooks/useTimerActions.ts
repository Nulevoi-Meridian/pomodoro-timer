import {
  TimerActionsTypes,
  TimerIntialStateType,
} from "../contexts/TimerContext/types";

import { TimerContext } from "../contexts/TimerContext/TimerContext";
import { useContext } from "react";

export interface TimerActionsProps {
  startTimerAction: () => void;
  stopTimerAction: () => void;
  resetTimerAction: () => void;
  setStatusAction: (status: string) => void;
  countDownAction: (counter: number) => void;
  setCounterAction: (counter: number) => void;
}

const useTimerActions = (): TimerActionsProps => {
  const { dispatch } = useContext(TimerContext) as TimerIntialStateType;

  const startTimerAction = () => {
    dispatch({ type: TimerActionsTypes.START_TIMER });
  };

  const stopTimerAction = () => {
    dispatch({ type: TimerActionsTypes.STOP_TIMER });
  };

  const resetTimerAction = () => {
    dispatch({ type: TimerActionsTypes.RESET_TIMER });
    dispatch({ type: TimerActionsTypes.STOP_TIMER });
  };

  const setStatusAction = (status: string) => {
    dispatch({ type: TimerActionsTypes.SET_STATUS, payload: status });
  };

  const countDownAction = (counter: number) => {
    dispatch({
      type: TimerActionsTypes.SET_COUNTER,
      payload: counter - 1,
    });
  };

  const setCounterAction = (counter: number) => {
    dispatch({
      type: TimerActionsTypes.SET_COUNTER,
      payload: counter,
    });
  };

  return {
    startTimerAction,
    stopTimerAction,
    resetTimerAction,
    setStatusAction,
    countDownAction,
    setCounterAction,
  };
};

export default useTimerActions;
