import React from "react";
import Filter from "../filter/Filter";
import { Container, TopContainer } from "./Styles";
import Article from "../article/Article";
import { GlobalStateContext } from "../../globals/GlobalState";
import { Button, P } from "../../utils";
export default function Articles({ data, nextPage }) {
  //   console.log(data);
  const articles = data?.dokumentlista.dokument;
  const dokuments = data?.dokumentlista;

  //   const articles = null;
  //   const dokuments = null;
  const { searchString, setSearchString, searchOptions, setSearchOptions } =
    React.useContext(GlobalStateContext);
  //   console.log(articles);

  return (
    <Container type="big">
      <TopContainer type="top">
        {dokuments ? (
          <>
            {" "}
            <TopContainer type="sub-big">
              <TopContainer type="sub">
                <P type="light">
                  {dokuments["@traff_fran"]}- {dokuments["@traff_till"]} av{" "}
                </P>
                <P type="default">
                  {dokuments["@traffar"]} träffar för "{searchString}"
                </P>
              </TopContainer>
            </TopContainer>
            <TopContainer type="sub-big">
              <TopContainer type="sub">
                <P type="default">Senaste först</P>
              </TopContainer>
              <TopContainer type="sub">
                <Button btnType="next_page" onClick={nextPage}>
                  <P type="default">Nästa sida </P>
                </Button>
              </TopContainer>
            </TopContainer>
          </>
        ) : (
          <P type="light">TBD</P>
        )}
      </TopContainer>
      <Filter></Filter>
      <Container type="content-flex">
        {articles ? (
          articles.map((article, key) => {
            return <Article key={key} article={article} />;
          })
        ) : (
          <>
            <P type="light">TBD</P>
          </>
        )}
      </Container>
    </Container>
  );
}
