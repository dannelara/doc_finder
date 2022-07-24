import styled from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.type === "top" && {
      width: "100%",

      top: "0",
      height: "7%",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      backgroundColor: props.theme.colors.content_light,
      flexWrap: "wrap",

      "@media screen and (max-width: 650px)": {
        display: "none",
      },
    }}

  ${(props) =>
    props.type === "container" && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      height: "100%",
      gap: "15px",
      "@media screen and (max-width: 650px)": {
        flexWrap: "wrap",
      },
    }}

    ${(props) =>
    props.type === "sub-big" && {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: "1",
      gap: "15px",
    }}


    ${(props) =>
    props.type === "sub" && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "60%",
      width: "100%",
      gap: "10px",
      "@media screen and (max-width: 650px)": {
        flexWrap: "wrap",
      },
    }}
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70%;
`;
