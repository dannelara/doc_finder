import styled from "styled-components";
export const Container = styled.div`
  flex-grow: 1;
  height: 90%;

  box-shadow: ${(props) => props.theme.content.boxShadow};
`;
