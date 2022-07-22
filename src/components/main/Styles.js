import styled from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.type === "big" && {
      width: "100%",
      height: "80%",
      backgroundColor: "red",
    }}
`;
