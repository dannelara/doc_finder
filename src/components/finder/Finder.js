import React, { useEffect, useRef, useState } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import Articles from "../articles/Articles";
import SearchBar from "../searchBar/SearchBar";
import { Container } from "./Styles";
import * as API from "../../fetch.js";
import ArticleView from "../articleView/ArticleView";

export default function Finder() {
  const {
    searchString,
    setSearchString,
    searchOptions,
    setSearchOptions,
    allArticles,
    setAllArticles,
  } = React.useContext(GlobalStateContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const [mode, setMode] = useState(0);
  // const [page, setPage] = useState(1);
  // console.log(data);
  const reset = () => {
    setSearchString("");
    setMode(0);
    setData(null);

    console.log("Startar om");
  };

  const onNextPage = async () => {
    await getArticles(data.dokumentlista["@nasta_sida"]);

    document.querySelector("#articles").scrollTop = 0;
    // setPage(page + 1);
    // console.log("current page", page);
  };

  const onPrevPage = async () => {
    if (parseInt(data.dokumentlista["@sida"]) > 1) {
      // setPage(page - 1);
      // console.log("prev page", page);
      await getArticles("", parseInt(data.dokumentlista["@sida"]) - 1);
      document.querySelector("#articles").scrollTop = 0;
    }
  };

  // const fetchAllArticles = async (data) => {
  //   let tempData = await data;
  //   console.log(tempData);
  //   // while (tempData.dokumentlista["@nasta_sida"]) {
  //   //   const data = await API.fetchArticles(
  //   //     tempData.dokumentlista["@nasta_sida"],
  //   //     searchString,
  //   //     searchOptions
  //   //   );
  //   //   console.log("here");
  //   //   console.log(tempData.dokumentlista["@nasta_sida"]);
  //   //   tempData = data;
  //   // }
  // };

  const getArticles = async (url, page) => {
    try {
      setLoading(true);

      const data = await API.fetchArticles(
        url,
        searchString,
        searchOptions,
        page
      );

      // console.log(articles);
      // setPage(parseInt(data.dokumentlista["@sida"]));
      // console.log("current page", page);
      // console.log("Nästa sida", page);
      setData(data);
      setLoading(false);
      document.querySelector("#articles").scrollTop = 0;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.register("'../../workers/serviceWorker.js'");
    // }

    if (searchString) {
      getArticles();
      // fetchAllArticles();
    }
  }, [searchString, searchOptions.start, searchOptions.end]);

  return (
    <Container type="big">
      <SearchBar setMode={setMode} />
      <Container type="big-flex">
        <Container type="left">
          <Articles
            data={data}
            nextPage={onNextPage}
            onPrevPage={onPrevPage}
          ></Articles>
        </Container>
        <Container type="right">
          <ArticleView></ArticleView>
        </Container>
      </Container>
    </Container>
  );
}
