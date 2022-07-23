import styled from "styled-components";
export const Container = styled.div`
  ${(props) =>
    props.type === "big" && {
      flexGrow: 1,
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      boxShadow: props.theme.content.boxShadow,
    }}
`;
