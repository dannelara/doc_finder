import styled from "styled-components";

const StyledWrapper = styled.div`
  ${(props) =>
    props.type === "big" && {
      height: "100%",
      width: "100%",
      backgroundColor: props.theme.colors.main,
      // //   position: "relative",
      // // minHeight: "100vh",
      // // width: "100vw",
      // //   height: "100vh",
      // width: "100%",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // flexWrap: "wrap",
      // overflow: "auto",
      // backgroundColor: props.theme.colors.main,
    }}
`;

export default StyledWrapper;
