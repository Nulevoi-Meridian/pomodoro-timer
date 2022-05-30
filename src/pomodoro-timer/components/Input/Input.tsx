import React from "react";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  value: number | string;
  onChange: (event: {
    target: {
      value: string;
      name: string;
    };
  }) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type="number"
        className="settings-modal__item-input"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
