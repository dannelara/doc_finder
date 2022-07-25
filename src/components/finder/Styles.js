import styled from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.type === "big" && {
      position: "relative",
      height: "100%",
      width: "100%",

      //   minHeight: "100%",
      //   width: "100%",
      //   backgroundColor: props.theme.content.default,
      //   marginTop: "4em",
      //   boxShadow: props.theme.content.boxShadow,
    }}

  ${(props) =>
    props.type === "big-flex" && {
      //   position: "relative",
      height: "93%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      //   backgroundColor: "red",
      //   minHeight: "100%",
      //   width: "100%",
      //   backgroundColor: props.theme.content.default,
      //   marginTop: "4em",
      //   boxShadow: props.theme.content.boxShadow,
    }}

    ${(props) =>
    props.type === "left" && {
      //   position: "relative",
      height: "100%",
      width: "60%",
      maxWidth: "60%",
      backgroundColor: props.theme.colors.content_light,
      borderRight: `2px solid ${props.theme.content.border}`,
      //   backgroundColor: "red",
      //   minHeight: "100%",
      //   width: "100%",
      //   backgroundColor: props.theme.content.default,
      //   marginTop: "4em",
      //   boxShadow: props.theme.content.boxShadow,
    }}
    ${(props) =>
    props.type === "right" && {
      //   position: "relative",
      height: "100%",
      width: "40%",
      maxWidth: "40%",

      //   backgroundColor: "red",
      //   minHeight: "100%",
      //   width: "100%",
      //   backgroundColor: props.theme.content.default,
      //   marginTop: "4em",
      //   boxShadow: props.theme.content.boxShadow,
    }}
`;
