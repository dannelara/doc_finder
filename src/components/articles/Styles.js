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
      position: "relative",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}

  ${(props) =>
    props.type === "content-flex" && {
      width: "80%",
      height: "90%",
      boxShadow: props.theme.content.boxShadow,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      overflowY: "scroll",
      gap: "15px",
    }}
`;

export const TopContainer = styled.div`
  ${(props) =>
    props.type === "top" && {
      top: "0",
      width: "100%",
      height: "10%",
      boxShadow: props.theme.content.boxShadow,
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
      borderBottom: `1px solid ${props.theme.content.border}`,
    }}

    
  ${(props) =>
    props.type === "sub" && {
      flexGrow: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80%",
      gap: "2px",
      borderRight: `1px solid ${props.theme.content.border}`,
      "&>*:last-child": {
        borderBottom: "none",
      },
    }}
`;
