import React, { useEffect, useRef, useState } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import Articles from "../articles/Articles";
import SearchBar from "../searchBar/SearchBar";
import { Container } from "./Styles";
import * as API from "../../fetch.js";
import ArticleView from "../articleView/ArticleView";
import { filter_organ_data } from "../filter/data/elementData.js";
export default function Finder() {
  const {
    searchString,
    setSearchString,
    searchOptions,
    setSearchOptions,
    allArticles,
    setAllArticles,
    filter_options,
    setFilter_options,
  } = React.useContext(GlobalStateContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const [filte_mode, setfilte_Mode] = useState(0);
  // const [page, setPage] = useState(1);
  // console.log(data);

  useEffect(() => {}, [searchOptions]);
  const reset = () => {
    setSearchString("");
    setfilte_Mode(0);
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

  const setFilters = ({ dokumentlista }) => {
    // const { document } = dokumentlista;

    // const filter_docs = {
    //   doktyp: [],
    //   organ: [],
    // };

    const doktyp = [];
    const organ = [];
    const { dokument } = dokumentlista;

    dokument.forEach((dok) => {
      if (!doktyp.some((e) => e[dok.doktyp] === dok.debattnamn)) {
        doktyp[doktyp.length] = { [dok.doktyp]: dok.debattnamn };
      }
    });

    setFilter_options((old) => ({
      ...old,
      ["doktyp"]: doktyp,
      // Change this code mate!
      ["organ"]: filter_organ_data,
    }));

    // dokument.forEach((dok) => {
    //   if (
    //     !filter_docs.doktyp.includes({
    //       [dok.doktyp]: dok.debattnamn,
    //     })
    //   ) {
    //     filter_docs.doktyp[filter_docs.doktyp.length] = {
    //       [dok.doktyp]: dok.debattnamn,
    //     };
    //   }
    // });

    //   dokument.forEach((dok) => {
    //     if (
    //       filter_docs.doktyp.filter((e) => e[dok.debaty] === dok.debattnamn) ===
    //       -1
    //     ) {
    //       filter_docs.doktyp[filter_docs.doktyp.length] = {
    //         [dok.doktyp]: dok.debattnamn,
    //       };
    //     }
    //   });
  };

  const getArticles = async (url, page) => {
    setfilte_Mode(1);
    try {
      setLoading(true);

      const data = await API.fetchArticles(
        url,
        searchString,
        searchOptions,
        page
      );

      // Temporary solution to not update the filters after the first search made thru the search
      if (filte_mode > 0) {
        setFilters(data);
      }

      setfilte_Mode(0);

      setData(data);
      setLoading(false);
      // Makes error occur
      const doc = document.querySelector("#articles");
      if (doc.scrollTop > 0) {
        doc.scrollTop = 0;
      }
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
  }, [
    searchString,
    searchOptions.start,
    searchOptions.end,
    searchOptions.doktyp,
    searchOptions.sort,
    searchOptions.organ,
  ]);

  return (
    <Container type="big">
      <SearchBar setfilte_Mode={setfilte_Mode} />
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
