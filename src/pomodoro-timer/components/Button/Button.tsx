import "./buttons.scss";

import React from "react";

interface ButtonProps {
  buttonValue: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonValue, onClick }) => {
  return (
    <div className="button-wrapper button-mr">
      <div className="button" onClick={onClick}>
        {buttonValue}
      </div>
    </div>
  );
};

export default Button;
