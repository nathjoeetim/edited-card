import { useState } from "react";

const useInputValidator = validInput => {
  const [inputState, setInputState] = useState("");
  // const [inputIsBlur, setInputIsBlur] = useState(false);

  const hasNoError = validInput(inputState);
  // const inputIsValid = hasNoError && inputIsBlur;

  const onChangeHandlerFn = e => {
    setInputState(e.target.value);
  };

  // const inputIsBlurFn = () => {
  //   setInputIsBlur(true);
  // };

  const clearInputValue = () => {
    setInputState("");
    // setInputIsBlur(false);
  };

  return {
    inputState,
    hasNoError,
    // inputIsBlurFn,
    // inputIsBlur,
    // inputIsValid,
    onChangeHandlerFn,
    clearInputValue,
  };
};

export default useInputValidator;
export function isEmail(value) {
  if (!value || typeof value !== "string") {
    return false; // Handle null, undefined, or non-string values
  }
  return value.includes("@");
}

export function isNotEmpty(value) {
  if (!value && value !== 0) {
    return false; // Handle null, undefined, or empty values
  }
  return value.toString().trim() !== "";
}
