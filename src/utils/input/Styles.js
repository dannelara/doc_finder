import styled from "styled-components";

const StyledInput = styled.input`
  ${(props) =>
    props.inputType === "default" && {
      border: "none",
      focus: "auto",
      width: "100%",
      padding: "0.1rem",

      caretColor: "black",
      textAlign: "center",
      appearance: "none",
      fontSize: "15px",
      fontWeight: "600",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 6px 8px",

      "::placeholder": {
        color: "#778899",
        opacity: "1" /* Firefox */,
      },

      ":-ms-input-placeholder": {
        color: "#778899",
      },

      "::-ms-input-placeholder": {
        color: "#778899",
      },

      "&:focus": {
        outline: "none",
        boxShadow: `inset 1em 2em 3em 0 ${props.theme.colors.main}`,
        color: "black",
        border: "none",
      },

      "@media screen and (max-width: 600px)": {
        minWidth: "100%",
      },
    }}

  ${(props) =>
    props.inputType === "search" && {
      border: "none",
      focus: "auto",
      width: "100%",
      height: "100%",
      padding: "0.1em",
      caretColor: "black",
      textAlign: "center",
      appearance: "none",
      fontSize: "15px",
      fontWeight: "600",
      border: `2px solid ${props.theme.content.border}`,
      "::placeholder": {
        color: "#778899",
        opacity: "1" /* Firefox */,
      },

      ":-ms-input-placeholder": {
        color: "#778899",
      },

      "::-ms-input-placeholder": {
        color: "#778899",
      },

      "&:focus": {
        outline: "none",
        boxShadow: `inset 1em 2em 3em 0 ${props.theme.colors.main}`,
        color: "black",
      },

      "@media screen and (max-width: 600px)": {
        minWidth: "100%",
      },
    }}
`;
export default StyledInput;
