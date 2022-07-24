import styled from "styled-components";
export const Container = styled.div`
  ${(props) =>
    props.type === "left-nav" && {
      flexGrow: 1,
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      borderRight: `2px solid ${props.theme.content.border}`,
    }}
`;
