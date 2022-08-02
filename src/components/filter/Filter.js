import React, { useEffect } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import { Button, Input, P } from "../../utils";
import { filter_datum_data, filter_sort_data } from "./data/elementData";
import { Container, StyledInput, StyledLabel } from "./Styles";
// import { filter_sort_data, filter_doc_types_data } from "./data/elementData";

import { BsFilter } from "react-icons/bs";
import FilterSection from "./filterSection/FilterSection";
export default function Filter() {
  const { setSearchOptions, filter_options, setFilter_options } =
    React.useContext(GlobalStateContext);

  const reset = () => {
    // FLytta till filterSection ?? checkboxes must be unchecked
    setSearchOptions((old) => ({
      ...old,
      ["sort"]: "",
      ["doktyp"]: "",
    }));
  };

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
            {filter_options?.doktyp && (
              <FilterSection data={filter_sort_data} id="sort" />
            )}
          </Container>
        </Container>
        <Container type="sub-big">
          <Container type="sub-small-top">
            <P type="light">Datum</P>
          </Container>
          <Container type="sub-small">
            {/* <FilterSection data={filter_datum_data} id="sort" /> */}
            {/* {filter_options?.doktyp && (
              <FilterSection data={filter_options.doktyp} id="doktyp" />
            )} */}

            {/* {filter_datum_data && (
              <FilterSection data={filter_datum_data} id="datum" />
            )} */}
          </Container>
        </Container>
        <Container type="sub-big">
          <Container type="sub-small-top">
            <P type="light">DOKUMENTTYP</P>
          </Container>
          <Container type="sub-small">
            {filter_options?.doktyp && (
              <FilterSection data={filter_options.doktyp} id="doktyp" />
            )}
          </Container>
        </Container>
        <Container type="sub-big">
          <Container type="sub-small-top">
            <P type="light">UTSKOTT/ORGAN</P>
          </Container>
          <Container type="sub-small">
            {filter_options?.organ && (
              <FilterSection data={filter_options.organ} id="organ" />
            )}
          </Container>
        </Container>
        <Container type="sub-big">
          {/* <Container type="sub-small-top">
            <P type="light">DOKUMENTTYP</P>
          </Container> */}
          <Container type="sub-small-button">
            <Button btnType="search" onClick={reset}>
              RESET
            </Button>
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
