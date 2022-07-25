import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "../../globals/GlobalState";
import { Container } from "./Styles";
import * as API from "../../fetch.js";

export default function ArticleView() {
  const { currentSelectedArticle, setCurrentSelectedArticle } =
    React.useContext(GlobalStateContext);

  const [articleXML, setARticleXML] = useState(null);

  const fetchFullArticle = async (id) => {
    const text = await API.fetchFullArticle(id);

    // const parsed = new window.DOMParser().parseFromString(text, "text");

    setARticleXML(text);

    // console.log(articleXML);
    // document
    //   .querySelector("#article-full")
    //   .setAttribute("dangerouslySetInnerHTML", {
    //     _html: `${articleXML.body.querySelector(".body")}`,
    //   });
  };

  // const fixArticleHTML = () => {
  //   const divs = Array.from(document.body.querySelectorAll('div[id^="page_"]'));
  //   divs.forEach((div) => {
  //     div.style.width = "100%";
  //   });
  // };

  useEffect(() => {
    if (currentSelectedArticle) {
      fetchFullArticle(currentSelectedArticle);
      // fixArticleHTML();
    }
  }, [currentSelectedArticle]);

  return (
    <Container type="big">
      <Container type="content-flex">
        {articleXML ? (
          <Container
            id="article-view"
            type="article-view"
            dangerouslySetInnerHTML={{ __html: `${articleXML}` }}
          >
            {/* {articleXML.map((item) => {
              console.log(item);
            })} */}
          </Container>
        ) : (
          <Container> </Container>
        )}
      </Container>
    </Container>
  );
}
