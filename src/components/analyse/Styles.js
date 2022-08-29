import styled from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.type === "big" && {
      position: "relative",
      height: "100%",
      width: "100%",
    }}

  ${(props) =>
    props.type === "content-wrapper" && {
      width: "100%",
      height: "93%",
    }}
`;
