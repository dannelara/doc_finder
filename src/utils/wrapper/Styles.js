import styled from "styled-components";

const StyledWrapper = styled.div`
  ${(props) =>
    props.type === "content" && {
      height: "91.3%",
      width: "100%",
      backgroundColor: props.theme.colors.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
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
