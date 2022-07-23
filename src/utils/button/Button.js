import React from "react";
import StyledButton from "./Styles";
export default function Button({ btnType, onClick, children }) {
  return (
    <StyledButton type="button" onClick={onClick} btnType={btnType}>
      {children}
    </StyledButton>
  );
}
