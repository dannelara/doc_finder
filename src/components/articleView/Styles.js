import styled from "styled-components";

export const Container = styled.div`
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
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

      "&>*:first-child": {
        margin: "0 !important",
      },
    }}
`;
