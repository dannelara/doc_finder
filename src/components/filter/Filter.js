import React from "react";
import { Button, Input, P } from "../../utils";
import { Container, StyledInput, StyledSpan } from "./Styles";
import { filter_sort_data, filter_doc_types_data } from "./data/elementData";
import { BsFilter } from "react-icons/bs";
export default function Filter() {
  // console.log(filter_sort_data);

  // filter_sort_data.forEach((item) => {
  //   console.log(item[item]);
  // });
  return (
    <Container type="left-nav">
      <Container type="content">
        <Container className="filter-top">
          <Container type="sub-small">
            <BsFilter />
            <P type="default">FILTER</P>
          </Container>
        </Container>
        <Container type="sub-big">
          <Container type="sub-small-top">
            <P type="light">SORTERA</P>
          </Container>
          <Container type="sub-small">
            {filter_sort_data.map((item, key) => {
              return (
                <Container type="sub" key={key}>
                  {/* <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  >
                    <p></p>
                  </input> */}

                  <StyledInput type="checkbox" id={Object.keys(item)} />
                  <StyledSpan>{Object.values(item)}</StyledSpan>
                </Container>
              );
            })}
            {/* <Container type="sub">
              <StyledSpan>test</StyledSpan>
            </Container>
            <Container type="sub">
              <StyledSpan>test</StyledSpan>
            </Container>
            <Container type="sub">
              <StyledSpan>test</StyledSpan>
            </Container>
            <Container type="sub">
              <StyledSpan>test</StyledSpan>
            </Container>
            <Container type="sub">
              <StyledSpan>test</StyledSpan>
            </Container>
            <Container type="sub">
              <StyledSpan>test</StyledSpan>
            </Container> */}
          </Container>
        </Container>
        <Container type="sub-big">
          <Container type="sub-small-top">
            <P type="light">DOKUMENTTYP</P>
          </Container>
          <Container type="sub-small">
            {filter_doc_types_data.map((item, key) => {
              return (
                <Container type="sub" key={key}>
                  {/* <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  >
                    <p></p>
                  </input> */}

                  <StyledInput type="checkbox" id={Object.keys(item)} />
                  <StyledSpan>{Object.values(item)}</StyledSpan>
                </Container>
              );
            })}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

{
  /* <Button btnType="next_page" onClick={nextPage}>
                      <P type="article-top">Nästa sida </P>
                      <AiOutlineArrowRight
                        style={{
                          color: "#ffff",
                        }}
                      ></AiOutlineArrowRight> */
}
