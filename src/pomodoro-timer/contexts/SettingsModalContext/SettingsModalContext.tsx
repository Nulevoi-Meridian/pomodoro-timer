import React, { ReactElement, useState } from "react";

interface ModalContextProps {
  children?: ReactElement;
}

export type SettingsModalContextType = {
  isSettingsModal: boolean;
  setSettingsModal: (value: boolean) => void;
};

export const SettingsModalContext =
  React.createContext<SettingsModalContextType | null>(null);

const SettingsModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [isSettingsModal, setSettingsModal] = useState<boolean>(false);

  return (
    <SettingsModalContext.Provider
      value={{ isSettingsModal, setSettingsModal }}
    >
      {children}
    </SettingsModalContext.Provider>
  );
};

export default SettingsModalProvider;
