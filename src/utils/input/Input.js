import React from "react";
import StyledInput from "./Styles";
export default function Input({
  onChange,
  placeHolder,
  value,
  type,
  autoFocus,
  children,
  inputType,
  list,
  onFocus,
}) {
  return (
    <StyledInput
      inputType={inputType}
      type={type}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      list={list}
      onFocus={onFocus}
      autoFocus={autoFocus}
    >
      {children}
    </StyledInput>
  );
}
