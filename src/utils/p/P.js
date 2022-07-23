import React from "react";
import StyledP from "./Styles";
export default function P({ type, children }) {
  return <StyledP type={type}>{children}</StyledP>;
}
