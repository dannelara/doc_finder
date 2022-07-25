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
    props.type === "content-flex" && {
      width: "95%",
      height: "95%",
      backgroundColor: "#ffff",
      border: `2px solid ${props.theme.content.border}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}

     ${(props) =>
    props.type === "article-view" && {
      width: "100%",
      height: "100%",
      overflow: "auto",
      padding: "0em 2em",
    }}
`;
