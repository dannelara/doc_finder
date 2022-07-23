import React, { useEffect, useRef, useState } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import Articles from "../articles/Articles";
import SearchBar from "../searchBar/SearchBar";
import { Container } from "./Styles";
import * as API from "../../fetch.js";
export default function Finder() {
  const { searchString, setSearchString, searchOptions, setSearchOptions } =
    React.useContext(GlobalStateContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [mode, setMode] = useState(0);

  const reset = () => {
    setSearchString("");
    setMode(0);
    setData(null);

    console.log("Startar om");
  };

  const onNextPage = async () => {
    await getArticles(data.dokumentlista["@nasta_sida"]);
  };

  const getArticles = async (url) => {
    try {
      setLoading(true);

      const articles = await API.fetchArticles(
        url,
        searchString,
        searchOptions
      );

      setData(articles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchString) {
      getArticles();
    }
  }, [searchString, searchOptions.start, searchOptions.end]);

  return (
    <Container type="big">
      <SearchBar setMode={setMode} />
      <Container type="big-flex">
        <Container type="left">
          <Articles data={data} nextPage={onNextPage}></Articles>
        </Container>
        <Container type="right"></Container>
      </Container>
    </Container>
  );
}
