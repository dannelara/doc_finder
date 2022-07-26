import styled from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.type === "container" && {
      height: "100%",
      width: "100%",
      maxHeight: "100%",
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
      height: "auto",
      marginLeft: "10px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: "2px",
    }}
`;

export const StyledLabel = styled.label`
  font-size: 11px;
  color: black;
  font-weight: 1000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 2px;
`;

export const StyledInput = styled.input`
  cursor: pointer;
`;
