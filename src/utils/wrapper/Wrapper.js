import React from "react";
import StyledWrapper from "./Styles";

export default function Wrapper({ type, children }) {
  return <StyledWrapper type={type}>{children}</StyledWrapper>;
}
