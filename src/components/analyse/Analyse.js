import React from "react";
import { Container } from "./Styles";
import { GlobalStateContext } from "../../globals/GlobalState";

export default function Analyse() {
  const { data } = React.useContext(GlobalStateContext);
  console.log("analyse page");
  console.log(data);

  return (
    <Container type="big">
      <Container type="content-wrapper">Analys sida</Container>
    </Container>
  );
}
