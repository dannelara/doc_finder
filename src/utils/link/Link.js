import React from "react";
import { StyledLink } from "./Styles";
export default function Link({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
