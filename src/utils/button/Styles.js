import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: 0;
  box-shadow: none;
  cursor: pointer;

  ${(props) =>
    props.btnType === "next_page" && {
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "5px",
      // height: "25px",
      // padding: "0",
      // width: "100px",
      // padding: "0.1rem",
      // fontSize: "15px",
      // fontWeight: "600",
      // background: "white",
      // backgroundColor: "rgb(119,136,153)",
      // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      // "&:active": {
      //   color: "black",
      //   backgroundColor: "grey",
      // },
    }}

  ${(props) =>
    props.btnType === "filter" && {
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "5px",
    }}


  ${(props) =>
    props.btnType === "search" && {
      color: "white",
      border: "none",
      backgroundColor: props.theme.colors.search_btn,
      height: "100%",
      width: "100%",
      fontSize: "15px",
      fontWeight: "600",
      padding: "0.3em 1.5em",
      borderRadius: "2px",

      "&:active": {
        color: "red",
      },
    }}
`;

export default StyledButton;
