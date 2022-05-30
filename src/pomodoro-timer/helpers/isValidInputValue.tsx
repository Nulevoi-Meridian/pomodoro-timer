interface settingsType {
  [key: string]: number;
}

interface schemaType {
  [key: string]: (value: number) => boolean;
}

export const isValidInputValue = (inputValue: settingsType) => {
  let isValid;
  const schema: schemaType = {
    pomodoroTimer: (value) => value > 0,
    shortBreakTimer: (value) => value > 0,
    longBreakTimer: (value) => value > 0,
    longBreakInitCounter: (value) => value > 0,
  };

  const errors = Object.keys(schema)
    .filter((key) => !schema[key](inputValue[key]))
    .map((key) => new Error(`${key} is invalid.`));

  if (errors.length) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
};
