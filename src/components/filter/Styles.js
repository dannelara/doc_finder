import styled from "styled-components";
export const Container = styled.div`
  ${(props) =>
    props.type === "left-nav" && {
      width: "25%",
      maxWidth: "25%",
      height: "100%",
      // maxWidth: "20%",
      borderRight: `2px solid ${props.theme.content.border}`,
    }}

  ${(props) =>
    props.type === "content" && {
      height: "auto",
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexWrap: "wrap",
      gap: "15px",
    }}

    ${(props) =>
    props.type === "sub-big" && {
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      borderBottom: `1px solid ${props.theme.content.border}`,
    }}
${(props) =>
    props.type === "sub-small-top" && {
      width: "95%",
      height: "35px",

      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    }}

    ${(props) =>
    props.type === "sub-small" && {
      width: "95%",
      height: "auto",
      maxHeight: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      flexWrap: "wrap",
      gap: "15px",
      overflow: "auto",
    }}

    ${(props) =>
    props.type === "sub" && {
      width: "100%",
      height: "15px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: "2px",
    }}

    .filter-top {
    width: 100%;
    height: 35px;

    alignitems: center;
    justifycontent: start;
    border-bottom: 1px solid ${(props) => props.theme.content.border};
  }
`;

export const StyledSpan = styled.span`
  font-size: 11px;
  color: black;
  font-weight: 1000;
  text-align: center;
`;

export const StyledInput = styled.input`
  cursor: pointer;
`;
