import React from "react";
import Filter from "../filter/Filter";
import { Container, TopContainer } from "./Styles";
import Article from "../article/Article";
import { GlobalStateContext } from "../../globals/GlobalState";
import { Button, P } from "../../utils";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
export default function Articles({ data, nextPage, onPrevPage }) {
  const articles = data?.dokumentlista.dokument;
  const dokuments = data?.dokumentlista;

  //   const articles = null;
  //   const dokuments = null;
  const {
    searchString,
    setSearchString,
    searchOptions,
    setSearchOptions,
    currentSelectedArticle,
    setCurrentSelectedArticle,
  } = React.useContext(GlobalStateContext);
  //   console.log(articles);

  const onClickArticleClick = (e) => {
    const articlesContainter = document.querySelector("#articles");

    const childrens = articlesContainter.children;

    Array.from(childrens).forEach((child) => {
      child.style.backgroundColor = "#ffff";
    });

    e.currentTarget.style.backgroundColor = "rgb(245,245,245)";

    setCurrentSelectedArticle(e.currentTarget.id);
    // console.log(e.currentTarget.id);
  };

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
                {parseInt(dokuments["@sida"]) > 1 && (
                  <TopContainer type="sub-small">
                    <Button btnType="next_page" onClick={onPrevPage}>
                      <AiOutlineArrowLeft></AiOutlineArrowLeft>
                      <P type="default">Förra sida </P>
                    </Button>
                  </TopContainer>
                )}
                <TopContainer type="sub-small">
                  <Button btnType="next_page" onClick={nextPage}>
                    <P type="default">Nästa sida </P>
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </Button>
                </TopContainer>
              </TopContainer>
            </TopContainer>
          </>
        ) : (
          <P type="light">TBD</P>
        )}
      </TopContainer>
      <Filter></Filter>
      <Container type="content-flex" id="articles">
        {articles ? (
          articles.map((article, key) => {
            return (
              <Article
                key={key}
                article={article}
                onClick={onClickArticleClick}
                id={article.dok_id}
              />
            );
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
