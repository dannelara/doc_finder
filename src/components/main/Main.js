import React from "react";
import { P, Wrapper } from "../../utils";
// import Finder from "../finder/Finder";
import { Container } from "./Styles";

export default function Main() {
  return (
    <Wrapper type="content">
      <Container type="big">
        <P> Hello</P>
      </Container>
      {/* <Finder></Finder>
      <Finder></Finder> */}
    </Wrapper>
  );
}
