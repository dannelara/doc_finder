import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import {
  Container,
  StyledDataList,
  StyledSelect,
  StyledOption,
  StyledForm,
} from "./Styles";
import { P, Input } from "../../utils";
import * as API from "../../fetch.js";

import Button from "../../utils/button/Button";
import checkString from "../../helpers/checkString";

export default function SearchBar({ getArticles }) {
  const { searchString, setSearchString, searchOptions, setSearchOptions } =
    React.useContext(GlobalStateContext);

  const [loading, setIsLoading] = useState(true);
  const [error_msg, setError_msg] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setError_msg("");
    if (userInput.length > 0) {
      try {
        // Validate string.
        const checkedString = checkString(userInput);
        console.log(startDate, endDate);
        setSearchString(checkedString);
        setSearchOptions({
          start: startDate,
          end: endDate,
        });

        // onClick();
        // setMode(1);
      } catch (error) {
        console.error(error);
        setError_msg(error.message);
      }
    } else {
      setError_msg("Sökord måste fyllas i.");
    }
  };

  return (
    <Container type="top">
      <StyledForm onSubmit={onSubmit}>
        <Container type="container">
          <Container type="sub-big">
            <Container type="sub">
              <Input
                inputType="search-text"
                type="text"
                placeHolder="Nyckelord eg. namn eller ord"
                onChange={(e) => setUserInput(e.currentTarget.value)}
                autoFocus
              />
            </Container>
          </Container>
          <Container type="sub-big">
            <Container type="sub">
              <P type="light">fr.o.m.</P>
              <Input
                inputType="search"
                type="date"
                onChange={(e) => setStartDate(e.currentTarget.value)}
              />
            </Container>
            <Container type="sub">
              <P type="light">t.o.m.</P>
              <Input
                inputType="search"
                type="date"
                onChange={(e) => setEndDate(e.currentTarget.value)}
              />
            </Container>
          </Container>

          <Container type="sub-big">
            <Container type="sub">
              <Button btnType="search" onClick={onSubmit}>
                SÖK
              </Button>
            </Container>
          </Container>

          {error_msg && (
            <Container type="sub-big">
              <Container type="sub">
                <P type="error">{error_msg}</P>
              </Container>
            </Container>
          )}
        </Container>
      </StyledForm>
    </Container>
  );
}
