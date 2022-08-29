import styled from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.type === "big" && {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTop: `2px solid ${props.theme.content.border}`,
    }}
  ${(props) =>
    props.type === "content-big" && {
      position: "relative",
      width: "97%",
      height: "95%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: props.theme.colors.content_light,
      border: `2px solid ${props.theme.content.border}`,
    }}

    ${(props) =>
    props.type === "bottom-big" && {
      width: "100%",
      height: "89%",
      maxHeight: "89%",
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}

  ${(props) =>
    props.type === "content-flex" && {
      width: "75%",
      height: "100%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      overflowY: "scroll",
    }}
`;

export const TopContainer = styled.div`
  ${(props) =>
    props.type === "top" && {
      width: "100%",
      height: "11%",
      //   boxShadow: props.theme.content.boxShadow,
      backgroundColor: props.theme.content.dark,
      borderBottom: `2px solid ${props.theme.content.border}`,
      borderRight: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}

  ${(props) =>
    props.type === "sub-big" && {
      width: "100%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: `1px solid #ffff`,

      "&>*:last-child": {
        borderRight: "none",
      },
    }}

    
  ${(props) =>
    props.type === "sub" && {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80%",
      gap: "5px",
      borderRight: `1px solid #ffff`,
      "&>*:last-child": {
        borderBottom: "none",
      },
    }}

    ${(props) =>
    props.type === "sub-small" && {
      flexGrow: 1,
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      height: "100%",
    }}
`;
