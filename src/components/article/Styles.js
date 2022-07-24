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
      height: "150px",
      width: "100%",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      borderBottom: `1px solid ${props.theme.content.border}`,
      gap: "15px",

      "&:hover": {
        cursor: "pointer",
      },

      //   "&:click": {
      //     backgroundColor: "red",
      //   },
    }}

  ${(props) =>
    props.type === "top" && {
      width: "90%",
      height: "auto",
      minHeight: "2em",
      display: "flex",
      textAlign: "center",
      justifyContent: "start",
    }}

    ${(props) =>
    props.type === "desc" && {
      width: "90%",
      height: "5em",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      overflowY: "auto",
      //   "::-webkit-scrollbar-thumb": {
      //     backgroundColor: "#d6dee1",
      //     borderRadius: "20px",
      //     border: "6px solid transparent",
      //     backgroundClip: "content-box",
      //   },
    }}

    ${(props) =>
    props.type === "bottom" && {
      width: "90%",
      height: "2em",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}

    ${(props) =>
    props.type === "bottom-small" && {
      minWidth: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    ${(props) =>
    props.type === "bottom-sub" && {
      flexGrow: "1",
      height: "100%",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: "5px",
    }}
`;

export const StyledA = styled.a`
  color: blue;
  font-size: 11px;
  font-weight: 1000;
  &:visited {
    background-color: #f44336;
    color: black;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
`;
