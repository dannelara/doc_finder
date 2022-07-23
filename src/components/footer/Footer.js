import React from "react";
import StyledFooter from "./Styles";
/**
 * Compont for app footer.
 * @param {children} children.
 * @returns react component.
 */
export default function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}
