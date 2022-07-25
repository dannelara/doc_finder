import styled from "styled-components";

const StyledP = styled.p`
  ${(props) =>
    props.type === "default" && {
      fontSize: "11px",
      color: "black",
      fontWeight: "1000",
      textAlign: "center",
    }}

  ${(props) =>
    props.type === "article-top" && {
      fontSize: "11px",
      color: "#ffff",
      fontWeight: "1000",
      textAlign: "center",
    }}

  ${(props) =>
    props.type === "header" && {
      color: "white",
    }}

  ${(props) =>
    props.type === "light" && {
      fontSize: "11px",
      color: "grey",
      fontWeight: "1000",
      textAlign: "center",
    }}

    ${(props) =>
    props.type === "title" && {
      fontSize: "12px",
      color: "black",
      fontWeight: "1000",
      textAlign: "center",
    }}

    ${(props) =>
    props.type === "desc" && {
      fontSize: "12px",
      color: "grey",
      fontWeight: "1000",
      textAlign: "center",
    }}
    
  ${(props) =>
    props.type === "error" && {
      fontSize: "15px",
      color: "red",
      fontWeight: "600",
    }}
`;

export default StyledP;
