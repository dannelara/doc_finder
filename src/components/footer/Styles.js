import styled from "styled-components";

const StyledFooter = styled.footer`
  right: 0;
  left: 0;
  bottom: 0;

  background-color: ${(props) => props.theme.content.default};
  box-shadow: ${(props) => props.theme.content.boxShadow};

  text-align: ${(props) => props.align || "center"};
  text-decoration: none;
  color: black;
  font-size: 14px;
`;
export default StyledFooter;
