import "./styles/normalize.scss";

import MainView from "./pomodoro-timer/views/MainView";
import ReactDOM from "react-dom/client";
import SettingsModalProvider from "./pomodoro-timer/contexts/SettingsModalContext/SettingsModalContext";
import TimerContextProvider from "./pomodoro-timer/contexts/TimerContext/TimerContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SettingsModalProvider>
    <TimerContextProvider>
      <MainView />
    </TimerContextProvider>
  </SettingsModalProvider>
);
